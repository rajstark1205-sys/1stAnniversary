import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('public/assets/aistudio');
const destDir = path.resolve('public/photos');
const audioDir = path.resolve('public/audio');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg') || f.endsWith('.webp'));
console.log('Found files:', files.length);

files.forEach((file, index) => {
  if (index < 20) {
    const numStr = String(index + 1).padStart(2, '0');
    const ext = path.extname(file);
    const destName = `PHOTO_${numStr}${ext}`;
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, destName));
  }
});

// Copy one as favourite
if (files.length > 0) {
  fs.copyFileSync(path.join(srcDir, files[4] || files[0]), path.join(destDir, 'OUR_FAVOURITE_PHOTO.jpg'));
}

console.log('Photos organized successfully!');
