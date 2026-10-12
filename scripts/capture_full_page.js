const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\Bibek\\.gemini\\antigravity-ide\\brain\\ca97085c-4745-4f05-a26e-a0e719e268c4';

const targets = [
  { name: 'desktop-1440-hero.png', width: 1440, height: 900 },
  { name: 'desktop-1440-complete.png', width: 1440, height: 7800 },
  { name: 'mobile-390-hero.png', width: 390, height: 844 },
  { name: 'mobile-390-complete.png', width: 390, height: 9800 },
];

for (const t of targets) {
  const outPath = path.join(artifactDir, t.name);
  console.log(`Capturing ${t.name} (${t.width}x${t.height})...`);
  execSync(`"${edgePath}" --headless=new --disable-gpu "--screenshot=${outPath}" --window-size=${t.width},${t.height} http://localhost:3000/`);
}

console.log('Final complete page QA screenshots captured:');
targets.forEach((t) => {
  const filePath = path.join(artifactDir, t.name);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`${t.name}: ${stats.size} bytes`);
  }
});
