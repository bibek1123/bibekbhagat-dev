const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\Bibek\\.gemini\\antigravity-ide\\brain\\ca97085c-4745-4f05-a26e-a0e719e268c4';

const targets = [
  { name: 'desktop-1440-full-all.png', width: 1440, height: 9800 },
  { name: 'mobile-390-full-all.png', width: 390, height: 12500 },
];

for (const t of targets) {
  const outPath = path.join(artifactDir, t.name);
  console.log(`Capturing ${t.name}...`);
  execSync(`"${edgePath}" --headless=new --disable-gpu "--screenshot=${outPath}" --window-size=${t.width},${t.height} http://localhost:3000/`);
}

console.log('Complete full-height QA screenshots captured.');
