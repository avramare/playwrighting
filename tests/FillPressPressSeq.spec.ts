import { test, expect, Page } from "@playwright/test"

test('Fill press and pressSeq practice', async ({ page }) => {

    // example 1 fill
    // await page.goto("https://ultimateqa.com/filling-out-forms/");
    // await page.locator('#et_pb_contact_name_0').fill("astralwaves")
    // await page.locator('#et_pb_contact_message_0').fill("Learn for brighter tomorrow");


    // example 2 framelocator
    // await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable");
    // await page.frameLocator('iframe[name="iframeResult"]').getByText('This is a paragraph. It is').fill("Testing content with astralwaves");


    // example 3 presSeq
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").pressSequentially("Playwright", { delay: 800 });
    
    //backspace
    // await page.locator("#APjFqb").press("Backspace");

    // arrow down + enter
    await page.locator("#APjFqb").press("ArrowDown+ArrowDown+ArrowDown")
    await page.locator("#APjFqb").press("Enter")
    
    
    // pressSeq with delay
    // await page.locator("#APjFqb").pressSequentially("Playwright", { delay: 1000 })


})