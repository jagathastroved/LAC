const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assests');
const outputDir = path.join(__dirname, 'assests'); // overwrite or optimize in place safely via temp

const imageSpecs = {
    'banner1.png': { width: 700 },
    'offer_badge.png': { width: 600 },
    'bottom_cake_2.png': { width: 400 },
    'lamp.png': { width: 200 },
    'gift.png': { width: 100 },
    'logo.png': { width: 200 },
    'obstacle.png': { width: 160 },
    'health.png': { width: 160 },
    'success.png': { width: 160 },
    'protection.png': { width: 160 },
    'botton-cake.png': { width: 400 },
    'heart.png': { width: 100 }
};

async function optimizeAll() {
    console.log('Starting image optimization with Sharp...');
    const files = fs.readdirSync(assetsDir);
    
    for (const file of files) {
        if (!file.endsWith('.png')) continue;
        const filePath = path.join(assetsDir, file);
        const spec = imageSpecs[file] || { width: 600 };
        const tempPath = path.join(assetsDir, `_opt_${file}`);
        
        try {
            const initialSize = fs.statSync(filePath).size;
            await sharp(filePath)
                .resize({ width: spec.width, withoutEnlargement: true })
                .png({ quality: 85, compressionLevel: 9, palette: true })
                .toFile(tempPath);
                
            const newSize = fs.statSync(tempPath).size;
            fs.unlinkSync(filePath);
            fs.renameSync(tempPath, filePath);
            
            console.log(`✓ ${file}: ${(initialSize/1024/1024).toFixed(2)}MB -> ${(newSize/1024).toFixed(1)}KB (${Math.round((1 - newSize/initialSize)*100)}% reduction)`);
        } catch (err) {
            console.error(`X Error optimizing ${file}:`, err.message);
            if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
    }
    console.log('All images successfully optimized with Sharp!');
}

optimizeAll();
