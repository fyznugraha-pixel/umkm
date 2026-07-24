const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const baseName = path.basename(entry.name, ext);
        const webpPath = path.join(dir, `${baseName}.webp`);

        console.log(`Converting ${fullPath} to webp...`);
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
          
          console.log(`Successfully created ${webpPath}`);
          
          // Delete original file
          fs.unlinkSync(fullPath);
          console.log(`Deleted original file: ${fullPath}`);
        } catch (error) {
          console.error(`Error processing ${fullPath}:`, error);
        }
      }
    }
  }
}

async function main() {
  console.log('Starting image conversion to WebP...');
  await processDirectory(publicDir);
  console.log('Done!');
}

main();
