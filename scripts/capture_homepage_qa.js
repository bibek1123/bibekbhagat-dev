const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\Bibek\\.gemini\\antigravity-ide\\brain\\ca97085c-4745-4f05-a26e-a0e719e268c4';

if (!fs.existsSync(artifactDir)) {
  fs.mkdirSync(artifactDir, { recursive: true });
}

const targets = [
  { name: 'desktop-1440-hero.png', width: 1440, height: 900 },
  { name: 'desktop-1440-full.png', width: 1440, height: 4200 },
  { name: 'mobile-390-hero.png', width: 390, height: 844 },
  { name: 'mobile-390-full.png', width: 390, height: 5600 },
  { name: 'tablet-768-hero.png', width: 768, height: 1024 },
  { name: 'desktop-1024-hero.png', width: 1024, height: 800 },
  { name: 'mobile-360-hero.png', width: 360, height: 800 },
];

for (const t of targets) {
  const outPath = path.join(artifactDir, t.name);
  console.log(`Capturing ${t.name} (${t.width}x${t.height})...`);
  execSync(`"${edgePath}" --headless=new --disable-gpu "--screenshot=${outPath}" --window-size=${t.width},${t.height} http://localhost:3000/`);
}

console.log('Homepage QA screenshots captured:');
targets.forEach((t) => {
  const filePath = path.join(artifactDir, t.name);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`${t.name}: ${stats.size} bytes`);
  }
});
