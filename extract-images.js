import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo HTML
const htmlPath = 'c:\\Users\\leona\\Downloads\\galeria-josue-v2 (1).html';
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Extraer todas las imágenes base64
const base64Pattern = /data:image\/jpeg;base64,([A-Za-z0-9+/=]+)/g;
const matches = [];
let match;

while ((match = base64Pattern.exec(htmlContent)) !== null) {
  matches.push(match[1]);
}

console.log(`Encontradas ${matches.length} imágenes en base64`);

// Crear directorio para las imágenes
const outputDir = path.join(__dirname, 'public', 'media', 'galeria');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convertir cada imagen base64 a archivo JPG
matches.forEach((base64Data, index) => {
  const buffer = Buffer.from(base64Data, 'base64');
  const filename = `trabajo_${index + 1}.jpg`;
  const filepath = path.join(outputDir, filename);
  
  fs.writeFileSync(filepath, buffer);
  console.log(`Imagen ${index + 1} guardada como ${filename}`);
});

console.log('Todas las imágenes han sido extraídas exitosamente');
