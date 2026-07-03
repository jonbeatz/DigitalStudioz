import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Check what images we have now
const imgDir = path.resolve(__dirname, '..', 'public', 'images');
const files = fs.readdirSync(imgDir).filter(f => f.startsWith('ds-demo'));
console.log('New demo images generated:');
files.forEach(f => {
  const stat = fs.statSync(path.join(imgDir, f));
  console.log(`  ${f} (${(stat.size / 1024).toFixed(0)}KB)`);
});

// List old images
const oldFiles = fs.readdirSync(imgDir).filter(f => f.startsWith('ds-') && !f.startsWith('ds-demo'));
console.log('\nOld images remaining:');
oldFiles.forEach(f => console.log(`  ${f}`));
