import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
});

test('Result list is shown on typing (Array and Tooltip-Mode)', async ({ page }) => {

    const input = await page.$('#auvi-input-tooltip');
    if(input) {
        await input.type('Test');

        const resultList = await page.locator('#auvi-input-tooltip ~ .auvi-result-list');
        await expect(resultList).toHaveClass(/is-open/gi);
    }

});

test('Result list is shown on typing (Async and Tooltip-Mode)', async ({ page }) => {

    const input = await page.$('#auvi-input-tooltip-async');
    if(input) {
        await input.type('Erv');

        const resultList = await page.locator('#auvi-input-tooltip-async ~ .auvi-result-list');
        await expect(resultList).toHaveClass(/is-open/gi);
    }
});

test('Result list hide on "Tab" - click (Async and Tooltip-Mode)', async ({ page }) => {

    const input = await page.$('#auvi-input-tooltip-async');
    if(input) {
        await input.type('Erv');
        await page.waitForResponse('http://localhost:3004/users?q=Erv');
        await page.keyboard.press('Tab');
        const resultList = await page.locator('#auvi-input-tooltip-async ~ .auvi-result-list');
        await expect(resultList).not.toBeVisible();
    }
});

test('Result list hide on "Escape" - click (Async and Tooltip-Mode)', async ({ page }) => {

    const input = await page.$('#auvi-input-tooltip-async');
    if(input) {
        await input.type('Erv');
        await page.waitForResponse('http://localhost:3004/users?q=Erv');
        await page.keyboard.press('Escape');
        const resultList = await page.locator('#auvi-input-tooltip-async ~ .auvi-result-list');
        await expect(resultList).not.toBeVisible();
    }
});

test('Result list focus element on arrow key down (Async and Tooltip-Mode)', async ({ page }) => {

    const input = await page.$('#auvi-input-tooltip-async');
    if(input) {
        await input.type('Erv');
        await page.waitForResponse('http://localhost:3004/users?q=Erv');
        await input.press('ArrowDown');
        // await page.keyboard.press('ArrowDown');

        const resultList = await page.locator('#auvi-input-tooltip-async ~ .auvi-result-list');
        const firstResultListItem = resultList.locator('.auvi-result-list-item').nth(0);
        await expect(firstResultListItem).toBeFocused();
    }
});

test('Result item clicked = Result list closed and input filled with value (Async and Tooltip-Mode)', async ({ page }) => {

    const input = await page.$('#auvi-input-tooltip-async');
    if(input) {
        await input.type('Erv');
        await page.waitForResponse('http://localhost:3004/users?q=Erv');
        const resultList = await page.locator('#auvi-input-tooltip-async ~ .auvi-result-list');
        const firstResultListItem = await resultList.locator('.auvi-result-list-item').nth(0);
        firstResultListItem.click();
        await expect(resultList).not.toBeVisible();
        await expect(await input.inputValue() === await firstResultListItem.innerText()).toBeTruthy();
    }
});
