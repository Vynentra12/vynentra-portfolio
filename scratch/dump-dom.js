const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function dumpDom() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-cache']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle0' });
  
  // Wait a bit for GSAP to settle
  await new Promise(r => setTimeout(r, 2000));
  
  // Dump outerHTML of body
  const html = await page.evaluate(() => document.body.outerHTML);
  fs.writeFileSync(path.join(__dirname, '..', 'scratch', 'dom-dump.html'), html);
  
  // Also list the top-level section class names to see if there's duplicate elements
  const sections = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section')).map(s => s.className);
  });
  console.log('SECTIONS:', sections);

  await browser.close();
}

dumpDom().catch(console.error);
