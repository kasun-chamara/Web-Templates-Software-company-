const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  const el = await page.locator('text=across the globe').first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  const img = await page.locator('img[alt*="World map"]').first();
  await img.screenshot({ path: '/tmp/map-only.png' });
  await browser.close();
})();
