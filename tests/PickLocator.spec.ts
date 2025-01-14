import { test } from "@playwright/test";

test('Pick Locator practice 1', async ({ page }) => {

    // PW extension
   await page.getByLabel('Pretraži', { exact: true }).fill("testing");
   await page.getByLabel('Prijava').click();

   // PW codegen
   await page.getByLabel('Pretraži', { exact: true }).fill("testing");
   page.getByLabel('Prijava').click();
})