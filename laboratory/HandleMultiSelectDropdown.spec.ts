import { test, expect } from "@playwright/test";

test('Handle Multi select dropdown', async ({ page }) => {
    await page.goto("https://demoqa.com/select-menu");
    
    // single item in array
    // await page.locator("#cars").selectOption(['Opel'])


    // multiple select with visible text
    // await page.locator("#cars").selectOption(['Volvo', 'Opel', 'Audi']);

    // multiple select with value and visible text
    // await page.locator("#cars").selectOption(['volvo', 'Opel', 'Audi']);
})