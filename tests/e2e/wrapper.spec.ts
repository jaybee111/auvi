import {expect, test} from "@playwright/test";

test('Wrapper has is-open class (Array and Tooltip-Mode)', async ({ page }) => {

    const input = await page.$('#auvi-input-tooltip');
    if(input) {
        await input.type('Test');

        const wrapper = await page.locator('.auvi-wrapper:near(#auvi-input-tooltip)');
        await expect(wrapper).toHaveClass(/is-open/gi);
    }

});
