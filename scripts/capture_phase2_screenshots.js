const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.join(__dirname, '..', 'public', 'work', 'screenshots', 'phase2');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const routes = [
  { name: 'fixkaro', path: '/work/home-services' },
  { name: 'roshni', path: '/work/stationery-printing' },
  { name: 'dhruv', path: '/work/manufacturing' },
  { name: 'ember', path: '/work/restaurant' },
  { name: 'arya', path: '/work/real-estate' },
];

for (const r of routes) {
  const dPath = path.join(outDir, `${r.name}-desktop.png`);
  const mPath = path.join(outDir, `${r.name}-mobile.png`);
  const url = `http://localhost:3000${r.path}`;

  console.log(`Capturing ${r.name} desktop...`);
  execSync(`"${edgePath}" --headless=new --disable-gpu "--screenshot=${dPath}" --window-size=1440,900 ${url}`);

  console.log(`Capturing ${r.name} mobile...`);
  execSync(`"${edgePath}" --headless=new --disable-gpu "--screenshot=${mPath}" --window-size=390,844 ${url}`);
}

console.log('All screenshots captured:');
fs.readdirSync(outDir).forEach((file) => {
  const stats = fs.statSync(path.join(outDir, file));
  console.log(`${file}: ${stats.size} bytes`);
});
