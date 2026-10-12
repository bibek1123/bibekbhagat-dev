const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.join(__dirname, '..', 'public', 'work', 'previews');

const routes = [
  { slug: 'ecommerce', path: '/work/ecommerce' },
  { slug: 'interior-design', path: '/work/interior-design' },
  { slug: 'dental-clinic', path: '/work/dental-clinic' },
  { slug: 'ielts-study-abroad', path: '/work/ielts-study-abroad' },
  { slug: 'beauty-salon', path: '/work/beauty-salon' },
  { slug: 'home-services', path: '/work/home-services' },
  { slug: 'stationery-printing', path: '/work/stationery-printing' },
  { slug: 'manufacturing', path: '/work/manufacturing' },
  { slug: 'restaurant', path: '/work/restaurant' },
  { slug: 'real-estate', path: '/work/real-estate' },
];

async function main() {
  const browser = spawn(edgePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/new?about:blank', { method: 'PUT' });
    const target = await listRes.json();
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const curId = id++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === curId) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    for (const r of routes) {
      console.log(`\n========================================`);
      console.log(`Testing & Capturing: ${r.slug} (${r.path})`);

      // 1. MOBILE CAPTURE (390 x 844, deviceScaleFactor: 2, mobile: true)
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true,
      });

      await send('Page.navigate', { url: `http://localhost:3000${r.path}` });
      await new Promise(res => setTimeout(res, 1800));

      // Check overflow
      const overflowCheck = await send('Runtime.evaluate', {
        expression: `(() => {
          const docWidth = document.documentElement.clientWidth;
          const scrollWidth = document.documentElement.scrollWidth;
          const overflowing = [];
          document.querySelectorAll('*').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > docWidth + 2) {
              overflowing.push({
                tag: el.tagName,
                id: el.id,
                classes: (el.className && typeof el.className === 'string') ? el.className.split(' ').slice(0, 3).join(' ') : '',
                rectRight: Math.round(rect.right),
                text: el.innerText ? el.innerText.substring(0, 25) : ''
              });
            }
          });
          return {
            clientWidth: docWidth,
            scrollWidth: scrollWidth,
            hasOverflow: scrollWidth > docWidth,
            overflowItems: overflowing.slice(0, 5)
          };
        })()`,
        returnByValue: true
      });

      console.log(`Mobile stats: clientWidth=${overflowCheck.result.value.clientWidth}, scrollWidth=${overflowCheck.result.value.scrollWidth}, hasOverflow=${overflowCheck.result.value.hasOverflow}`);
      if (overflowCheck.result.value.hasOverflow) {
        console.log('OVERFLOW DETECTED:', JSON.stringify(overflowCheck.result.value.overflowItems, null, 2));
      }

      // Capture Mobile Screenshot
      const mobileShot = await send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: 390, height: 844, scale: 1 }
      });
      const mPath = path.join(outDir, `${r.slug}-mobile.png`);
      fs.writeFileSync(mPath, Buffer.from(mobileShot.data, 'base64'));
      console.log(`Saved ${r.slug}-mobile.png (${fs.statSync(mPath).size} bytes)`);

      // 2. DESKTOP CAPTURE (1440 x 900, deviceScaleFactor: 2, desktop)
      await send('Emulation.setDeviceMetricsOverride', {
        width: 1440,
        height: 900,
        deviceScaleFactor: 1.5,
        mobile: false,
      });

      await send('Page.navigate', { url: `http://localhost:3000${r.path}` });
      await new Promise(res => setTimeout(res, 1800));

      const deskShot = await send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: 1440, height: 900, scale: 1 }
      });
      const dPath = path.join(outDir, `${r.slug}-desktop.png`);
      fs.writeFileSync(dPath, Buffer.from(deskShot.data, 'base64'));
      console.log(`Saved ${r.slug}-desktop.png (${fs.statSync(dPath).size} bytes)`);
    }

    ws.close();
    console.log('\nAll captures completed successfully via CDP!');
  } catch (err) {
    console.error('Error in capture process:', err);
  } finally {
    browser.kill();
  }
}

main();
