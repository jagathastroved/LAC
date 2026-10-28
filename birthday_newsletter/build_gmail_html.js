const fs = require('fs');
const path = require('path');

const inputHtmlPath = path.join(__dirname, 'index.html');
const outputCdnHtmlPath = path.join(__dirname, 'index_gmail.html');
const outputGhPagesHtmlPath = path.join(__dirname, 'index_gmail_ghpages.html');
const outputBase64HtmlPath = path.join(__dirname, 'index_gmail_base64.html');

const jsDelivrBase = 'https://cdn.jsdelivr.net/gh/sundarishanmugavel/Birthday_Newsletter@main/assests/';
const ghPagesBase = 'https://sundarishanmugavel.github.io/Birthday_Newsletter/assests/';

let html = fs.readFileSync(inputHtmlPath, 'utf8');

// 1. Generate jsDelivr CDN version (Best public CDN for Gmail Image Proxy)
let cdnHtml = html.replace(/src=["']assests\/([^"']+)["']/g, (match, p1) => {
    return `src="${jsDelivrBase}${p1}"`;
});
fs.writeFileSync(outputCdnHtmlPath, cdnHtml, 'utf8');
console.log('✓ Created index_gmail.html (jsDelivr CDN URL version)');

// 2. Generate GitHub Pages version
let ghPagesHtml = html.replace(/src=["']assests\/([^"']+)["']/g, (match, p1) => {
    return `src="${ghPagesBase}${p1}"`;
});
fs.writeFileSync(outputGhPagesHtmlPath, ghPagesHtml, 'utf8');
console.log('✓ Created index_gmail_ghpages.html (GitHub Pages URL version)');

// 3. Generate Base64 embedded version (For local viewing / non-Gmail clients)
let base64Html = html.replace(/src=["']assests\/([^"']+)["']/g, (match, p1) => {
    const imgPath = path.join(__dirname, 'assests', p1);
    if (fs.existsSync(imgPath)) {
        const fileData = fs.readFileSync(imgPath);
        const ext = path.extname(p1).replace('.', '') || 'png';
        const mimeType = ext === 'svg' ? 'image/svg+xml' : `image/${ext}`;
        const base64Str = fileData.toString('base64');
        return `src="data:${mimeType};base64,${base64Str}"`;
    }
    return match;
});
fs.writeFileSync(outputBase64HtmlPath, base64Html, 'utf8');
console.log('✓ Created index_gmail_base64.html (Base64 embedded version)');


