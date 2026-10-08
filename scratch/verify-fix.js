const puppeteer = require('puppeteer-core');
const path = require('path');

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-cache']
  });

  const outDir = 'C:\\Users\\vivek\\.gemini\\antigravity-ide\\brain\\aad45493-9acd-460b-bba4-68c6e5198797';

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Force a hard reload to skip any Next.js cache
  await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  const steps = [
    { y: 0,    name: 'v2_hero' },
    { y: 2000, name: 'v2_services_mid' },
    { y: 3800, name: 'v2_services_end' },
    { y: 4200, name: 'v2_after_services' },
    { y: 5200, name: 'v2_process_full' },
    { y: 6000, name: 'v2_cta_entering' },   // CTA should be dark, no images visible
    { y: 7000, name: 'v2_cta_animating' },  // Images should be flying in to circle
    { y: 8000, name: 'v2_cta_complete' },   // Full circle
  ];

  for (const s of steps) {
    await page.evaluate((y) => window.scrollTo(0, y), s.y);
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, `${s.name}.png`) });
    console.log(`Captured ${s.name} at y=${s.y}`);
  }

  await browser.close();
  console.log('Done!');
}

verify().catch(console.error);
