import { test } from "@playwright/test";

test('Handle Iframe with name', async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");

    // iframe with name
    // page.frame("iframeResult");

    //storing frame as variable
    const w3Frame = page.frame("iframeResult");
    await w3Frame?.locator("#fname").fill("avramare");

})

test('Handle Iframe with url', async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");

    // iframe with url
    // page.frame({ url: "https://www.w3schools.com/html/default.asp" })

    //storing frame as variable
    const w3Frame2 = page.frame({ url: "https://www.w3schools.com/html/default.asp" });
    await w3Frame2?.getByLabel('Button to open search field').click();
    await w3Frame2?.getByPlaceholder('Search...').fill("Hi There!");
})

test('Handle Iframe with frame locator method', async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");

    // frameLocator method
    // page.frameLocator("[title='W3Schools HTML Tutorial']")

    //storing frame as variable
    const w3Frame3 = page.frameLocator("[title='W3Schools HTML Tutorial']");
    await w3Frame3?.getByLabel('Button to open search field').click();
    await w3Frame3?.getByPlaceholder('Search...').fill("Hi There!");
})

