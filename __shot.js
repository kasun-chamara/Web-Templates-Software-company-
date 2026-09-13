const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  const el = await page.locator('text=across the globe').first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  const section = await page.locator('section:has-text("across the globe")').first();
  await section.screenshot({ path: '/tmp/global-reach2.png' });
  await browser.close();
})();
