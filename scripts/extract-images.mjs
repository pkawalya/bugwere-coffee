import fs from 'fs';
import path from 'path';

const SCRIPTS_DIR = '/home/z/my-project/scripts';

// Get all page JSON files sorted
const pageFiles = fs.readdirSync(SCRIPTS_DIR)
  .filter(f => f.startsWith('page-') && f.endsWith('.json'))
  .sort();

const allImageUrls = new Set();

for (const file of pageFiles) {
  const filePath = path.join(SCRIPTS_DIR, file);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(raw);
    
    // Navigate to HTML content: data.html
    const html = json?.data?.html;
    if (!html) {
      console.log(`⚠️  No HTML found in ${file}`);
      continue;
    }

    const pageImages = new Set();

    // 1. Find all <img> src attributes
    const imgSrcRegex = /<img[^>]+src\s*=\s*["']([^"']+)["']/gi;
    let match;
    while ((match = imgSrcRegex.exec(html)) !== null) {
      const url = match[1];
      if (/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url) || /\.(jpg|jpeg|png|gif|webp)/i.test(url)) {
        pageImages.add(url);
      }
    }

    // 2. Find all srcset URLs
    const srcsetRegex = /srcset\s*=\s*["']([^"']+)["']/gi;
    while ((match = srcsetRegex.exec(html)) !== null) {
      const srcsetVal = match[1];
      // srcset can have multiple URLs like: url1 1x, url2 2x
      const entries = srcsetVal.split(',');
      for (const entry of entries) {
        const url = entry.trim().split(/\s+/)[0];
        if (/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url) || /\.(jpg|jpeg|png|gif|webp)/i.test(url)) {
          pageImages.add(url);
        }
      }
    }

    // 3. Find all background-image URLs in inline styles
    const bgImgRegex = /background-image\s*:\s*url\(\s*["']?([^"')\s]+)["']?\s*\)/gi;
    while ((match = bgImgRegex.exec(html)) !== null) {
      const url = match[1];
      if (/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url) || /\.(jpg|jpeg|png|gif|webp)/i.test(url)) {
        pageImages.add(url);
      }
    }

    // 4. Find any image URLs in data attributes (like data-bg, data-lazy-src, etc.)
    const dataAttrRegex = /data-(?:bg|lazy-src|src|image|thumb|background)\s*=\s*["']([^"']+)["']/gi;
    while ((match = dataAttrRegex.exec(html)) !== null) {
      const url = match[1];
      if (/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url) || /\.(jpg|jpeg|png|gif|webp)/i.test(url)) {
        pageImages.add(url);
      }
    }

    // 5. Broad sweep: find any URL with image extensions in the HTML
    const broadUrlRegex = /https?:\/\/[^\s"'<>)]+\.(jpg|jpeg|png|gif|webp)(\?[^\s"'<>)]*)?/gi;
    while ((match = broadUrlRegex.exec(html)) !== null) {
      pageImages.add(match[0]);
    }

    console.log(`📄 ${file}: found ${pageImages.size} image(s)`);
    
    for (const url of pageImages) {
      allImageUrls.add(url);
    }
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err.message);
  }
}

// Sort the URLs for clean output
const sortedUrls = [...allImageUrls].sort();

console.log(`\n✅ Total unique image URLs across all pages: ${sortedUrls.length}`);

// Write to output file
const outputPath = path.join(SCRIPTS_DIR, 'all-site-images.txt');
fs.writeFileSync(outputPath, sortedUrls.join('\n') + '\n');
console.log(`📝 Written to ${outputPath}`);

// Print all URLs
console.log('\n=== ALL UNIQUE IMAGE URLs ===');
sortedUrls.forEach((url, i) => console.log(`${i + 1}. ${url}`));
