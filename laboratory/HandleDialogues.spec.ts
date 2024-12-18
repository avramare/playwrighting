import { test, expect } from "@playwright/test";

test('Handling Alert dialogues', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // // HANDLING JS ALERT
    // // providing dialogue handller(example with dialogue(accept))
    page.on("dialog", dialog => {
        // assertions
        expect(dialog.type()).toEqual("alert");
        expect(dialog.message()).toEqual("I am a JS Alert");
        dialog.accept();
    })

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");

    // // providing dialogue handler(example with error, without dialogue(accept))
    // page.on("dialog", dialog => {
    //    // assertions
    //    expect(dialog.type()).toEqual("alert");
    //    expect(dialog.message()).toEqual("I am a JS Alert"); 
    // })

    // await page.getByRole('button', { name: 'Click for JS Alert' }).click();


    // automatic click on dialogue
    // await page.getByRole('button', { name: 'Click for JS Alert' }).click();
})

test('Handling Confirm dialgues', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // HANDLING JS CONFIRM

    page.on("dialog", dialog => {
        //assertions
        expect(dialog.type()).toEqual("confirm");
        expect(dialog.message()).toEqual("I am a JS Confirm");
        //dialog actions
        // dialog.accept();
        dialog.dismiss();
    })

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
})

test('Handling Prompt dialogue', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // HANDLING JS PROMPT

    page.on("dialog", dialog => {
        //assertions
        expect(dialog.type()).toEqual("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt");
        //additional assertion
        expect(dialog.defaultValue()).toEqual("");
        //dialog actions
        dialog.accept();
        // dialog.accept("Hi There!");
        // dialog.dismiss();
    })

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
})