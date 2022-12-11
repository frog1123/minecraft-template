const puppeteer = require('puppeteer');
const { join } = require('path');

const outputName = process.argv[2];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });

  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.setViewport({ width: 1920, height: 1080 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({
    type: 'png',
    path: join(__dirname, '..', 'outputs', `${outputName}.png`),
    fullPage: true
  });

  // browser.close();
  console.log('screenshotted http://127.0.0.1:5500/index.html');
})();
