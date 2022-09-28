import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test('Loading indicator is shown on typing (Async and Tooltip-Mode)', async ({ page }) => {

  const input = await page.$('#auvi-input-tooltip-async');
  if(input) {
    await input.type('Erv');
    const loadingIndicator = await page.locator('.auvi-loading-indicator-wrapper:near(#auvi-input-tooltip-async)');
    await expect(loadingIndicator).toHaveClass(/is-shown/gi);
  }
});
