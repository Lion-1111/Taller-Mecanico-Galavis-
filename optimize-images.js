import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galeriaDir = path.join(__dirname, 'public', 'media', 'galeria');
const files = fs.readdirSync(galeriaDir).filter(f => f.endsWith('.jpg'));

console.log(`Optimizando ${files.length} imágenes...`);

files.forEach(file => {
  const inputPath = path.join(galeriaDir, file);
  const outputPath = path.join(galeriaDir, file);

  sharp(inputPath)
    .resize(800, 600, { 
      fit: 'inside',
      withoutEnlargement: true 
    })
    .jpeg({ 
      quality: 75,
      progressive: true 
    })
    .toFile(outputPath + '.tmp')
    .then(() => {
      fs.renameSync(outputPath + '.tmp', outputPath);
      const stats = fs.statSync(outputPath);
      console.log(`${file}: ${stats.size} bytes`);
    })
    .catch(err => console.error(`Error optimizando ${file}:`, err));
});

console.log('Optimización completada');
