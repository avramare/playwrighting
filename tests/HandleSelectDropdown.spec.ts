import { test, expect } from "@playwright/test";



test('Handle Select dropdown with value and visible text', async ({ page }) => {
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    await page.locator("#testingDropdown").selectOption({ index: 2 });
})

test('Handle Select dropdown with label', async ({ page }) => {
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label");

    await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption({ label: 'Audi' });
})



// // LABEL
// test('Handle Select dropdown with label', async ({ page }) => {
//     await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label");

//     await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption('Mercedes');
// })

// selecting with lable key
// test('Handle Select dropdown with label', async ({ page }) => {
//     await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label");

//     await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption({ label: 'Audi' });
// })


// // VALUE

// // vaule
// test('Handle Select dropdown with value and visible text', async ({ page }) => {
//     await page.goto("https://artoftesting.com/samplesiteforselenium");
//     await page.locator("#testingDropdown").selectOption("Manual");
// })

// // visible text
// test('Handle Select dropdown with value and visible text', async ({ page }) => {
//     await page.goto("https://artoftesting.com/samplesiteforselenium");
//     await page.locator("#testingDropdown").selectOption("Database Testing");
// })

// // selecting object with key value
// test('Handle Select dropdown with value and visible text', async ({ page }) => {
//     await page.goto("https://artoftesting.com/samplesiteforselenium");
//     await page.locator("#testingDropdown").selectOption({value: 'Performance'})
//     //label as key
//     // await page.locator("#tearingDropdown").selectOption({label: 'Database Testing'})
// })

// // selecting value with index
// test('Handle Select dropdown with value and visible text', async ({ page }) => {
//     await page.goto("https://artoftesting.com/samplesiteforselenium");
//     await page.locator("#testingDropdown").selectOption({ index: 2 });
// })