const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.join(__dirname, '..', 'public', 'work', 'previews');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

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

for (const r of routes) {
  const dPath = path.join(outDir, `${r.slug}-desktop.png`);
  const mPath = path.join(outDir, `${r.slug}-mobile.png`);
  const url = `http://localhost:3000${r.path}`;

  console.log(`Capturing ${r.slug} desktop...`);
  execSync(`"${edgePath}" --headless=new --disable-gpu "--screenshot=${dPath}" --window-size=1440,900 ${url}`);

  console.log(`Capturing ${r.slug} mobile...`);
  execSync(`"${edgePath}" --headless=new --disable-gpu "--screenshot=${mPath}" --window-size=390,844 ${url}`);
}

console.log('All 10 project screenshots captured successfully:');
fs.readdirSync(outDir).forEach((file) => {
  const stats = fs.statSync(path.join(outDir, file));
  console.log(`${file}: ${stats.size} bytes`);
});
