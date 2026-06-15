import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo HTML
const htmlPath = 'c:\\Users\\leona\\Downloads\\evidencia_galavis_1.html';
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Extraer todas las imágenes base64
const base64Pattern = /src="data:image\/(jpeg|jpg|png);base64,([^"]+)"/g;
let match;
let imageIndex = 0;
const images = [];

while ((match = base64Pattern.exec(htmlContent)) !== null) {
  const format = match[1];
  const base64Data = match[2];
  images.push({
    index: imageIndex,
    format: format,
    data: base64Data
  });
  imageIndex++;
}

console.log(`Se encontraron ${images.length} imágenes`);

// Crear directorio de salida si no existe
const outputDir = path.join(__dirname, 'public', 'media', 'galeria');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Guardar cada imagen
images.forEach((img, i) => {
  const buffer = Buffer.from(img.data, 'base64');
  const filename = `trabajo_${i + 1}.${img.format === 'jpeg' ? 'jpg' : img.format}`;
  const filepath = path.join(outputDir, filename);
  fs.writeFileSync(filepath, buffer);
  console.log(`Guardado: ${filename}`);
});

console.log('Extracción completada');
