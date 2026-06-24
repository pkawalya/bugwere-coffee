import fs from 'fs';
import path from 'path';

const SCRIPTS_DIR = '/home/z/my-project/scripts';
const allImageUrls = new Set();

// ============================================================
// SOURCE 1: Extract images from page_reader JSON files (18 pages)
// ============================================================
const pageFiles = fs.readdirSync(SCRIPTS_DIR)
  .filter(f => f.startsWith('page-') && f.endsWith('.json'))
  .sort();

for (const file of pageFiles) {
  const filePath = path.join(SCRIPTS_DIR, file);
  try {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const html = json?.data?.html;
    if (!html) continue;

    const broadUrlRegex = /https?:\/\/[^\s"'<>)]+\.(jpg|jpeg|png|gif|webp)(\?[^\s"'<>)]*)?/gi;
    let m;
    while ((m = broadUrlRegex.exec(html)) !== null) {
      allImageUrls.add(m[0]);
    }
  } catch {}
}
console.log(`Source 1 (page_reader scrapes): ${allImageUrls.size} unique URLs so far`);

// ============================================================
// SOURCE 2: Extract images from homepage JSON (real content)
// ============================================================
const homepageFiles = ['homepage.json', 'homepage-raw.json'];
for (const file of homepageFiles) {
  const filePath = path.join(SCRIPTS_DIR, file);
  if (!fs.existsSync(filePath)) continue;
  try {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const html = json?.data?.html;
    if (!html) continue;

    const broadUrlRegex = /https?:\/\/[^\s"'<>)]+\.(jpg|jpeg|png|gif|webp)(\?[^\s"'<>)]*)?/gi;
    let m;
    while ((m = broadUrlRegex.exec(html)) !== null) {
      allImageUrls.add(m[0]);
    }
  } catch {}
}
console.log(`Source 2 (homepage JSONs): ${allImageUrls.size} unique URLs so far`);

// ============================================================
// SOURCE 3: WP Media API (all uploaded media with all sizes)
// ============================================================
const mediaFile = path.join(SCRIPTS_DIR, 'wp-media.json');
if (fs.existsSync(mediaFile)) {
  try {
    const data = JSON.parse(fs.readFileSync(mediaFile, 'utf-8'));
    data.forEach(m => {
      // source_url
      if (m.source_url && /\.(jpg|jpeg|png|gif|webp)$/i.test(m.source_url)) {
        allImageUrls.add(m.source_url);
      }
      // All sizes
      const sizes = m.media_details?.sizes;
      if (sizes) {
        Object.values(sizes).forEach(s => {
          if (s.source_url && /\.(jpg|jpeg|png|gif|webp)$/i.test(s.source_url)) {
            allImageUrls.add(s.source_url);
          }
        });
      }
    });
  } catch {}
}
console.log(`Source 3 (WP Media API): ${allImageUrls.size} unique URLs so far`);

// ============================================================
// SOURCE 4: Elementor preview HTML pages
// ============================================================
const elemFiles = fs.readdirSync(SCRIPTS_DIR)
  .filter(f => f.startsWith('elem-page-') && f.endsWith('.html'))
  .sort();

for (const file of elemFiles) {
  const filePath = path.join(SCRIPTS_DIR, file);
  try {
    const html = fs.readFileSync(filePath, 'utf-8');
    const broadUrlRegex = /https?:\/\/[^\s"'<>)]+\.(jpg|jpeg|png|gif|webp)(\?[^\s"'<>)]*)?/gi;
    let m;
    while ((m = broadUrlRegex.exec(html)) !== null) {
      allImageUrls.add(m[0]);
    }
  } catch {}
}
console.log(`Source 4 (Elementor previews): ${allImageUrls.size} unique URLs so far`);

// ============================================================
// SOURCE 5: Previously saved JSON files (about, contact, etc.)
// ============================================================
const oldFiles = fs.readdirSync(SCRIPTS_DIR)
  .filter(f => f.endsWith('.json') && !f.startsWith('page-') && !f.startsWith('homepage') && !f.startsWith('wp-') && !f.startsWith('page-id'))
  .sort();

for (const file of oldFiles) {
  const filePath = path.join(SCRIPTS_DIR, file);
  try {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const html = json?.data?.html;
    if (!html) continue;

    const broadUrlRegex = /https?:\/\/[^\s"'<>)]+\.(jpg|jpeg|png|gif|webp)(\?[^\s"'<>)]*)?/gi;
    let m;
    while ((m = broadUrlRegex.exec(html)) !== null) {
      allImageUrls.add(m[0]);
    }
  } catch {}
}
console.log(`Source 5 (old JSON files): ${allImageUrls.size} unique URLs so far`);

// ============================================================
// Final output: deduplicated, sorted list
// ============================================================
const sortedUrls = [...allImageUrls].sort();

console.log(`\n✅ Total unique image URLs across ALL sources: ${sortedUrls.length}`);

const outputPath = path.join(SCRIPTS_DIR, 'all-site-images.txt');
fs.writeFileSync(outputPath, sortedUrls.join('\n') + '\n');
console.log(`📝 Written to ${outputPath}`);

console.log('\n=== ALL UNIQUE IMAGE URLs ===');
sortedUrls.forEach((url, i) => console.log(`${i + 1}. ${url}`));
