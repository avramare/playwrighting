import { test, expect } from "@playwright/test";

test(' Handle New Page', async ({ context }) => {
    const page = await context.newPage();
    await page.goto("https://testpages.eviltester.com/styled/index.html");
    await expect(page).toHaveTitle("Web Testing and Automation Practice Application Pages");
    // listner for event
    const pagePromise = context.waitForEvent("page");
    await page.locator("id=basicajaxtest").click();
    const newPage =await pagePromise;
    await newPage.locator("[name= 'submitbutton']").click();
})