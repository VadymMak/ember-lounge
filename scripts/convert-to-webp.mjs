import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const dirs = ['public/images', 'public/images/gallery'];

for (const dir of dirs) {
  const files = await readdir(dir);
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const input = path.join(dir, file);
      const output = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      await sharp(input).webp({ quality: 82 }).toFile(output);
      console.log(`Converted: ${input} → ${output}`);
    }
  }
}
