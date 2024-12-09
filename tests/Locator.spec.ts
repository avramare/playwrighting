// import { test } from '@playwright/test'

// test('Practice of Locator method', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/');

//     //Xpath selector
//     await page.locator("//*[@name='user-name']").fill("standard_user");
//     await page.locator('input#password').fill('secret_sauce');
//     //await page.locator(`input.submit-button`).click();

//     //CSS selector
//     await page.locator("input[value=Login]").click();

//     //Text selector
//     await page.locator("text=Sauce LABS Backpack").click();
//     // await page.locator("text='Sauce Labs Backpack'").click();

//     // await page.locator("id=add-to-cart-sauce-labs-backpack").click();

//     await page.locator("data-test=add-to-cart").click();

// })

// test('Practice of Locator method with Options', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator(".form_group", { has: page.locator("input#user-name") }).click();
//     await page.locator(".form_group", { has: page.locator("input#user-name") }).pressSequentially("standard_user");

//     await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).click();
//     await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).pressSequentially("secret_sauce");

//     await page.locator("#login-button").click();

//     // await page.locator("//a", { hasText: "Sauce Labs Backpack" }).click();

//     await page.locator(".inventory_item_name ", { hasNotText: /Sauce.*/ }).click();
// })

// test('Practice of getBy methods', async ({ page }) => {
//     // await page.goto('https://demo.nopcommerce.com/login');
//     // await page.getByLabel("Email:").fill("testcodeautomate@gmail.com");
     
//     // console.log(await page.getByText("New Customer").textContent());
//     // await page.getByAltText("nopCommerce demo store").click();
//     // await page.getByTitle("Show products in category Electronics").first().click();
//     // await page.getByPlaceholder('Search store').fill("Mobile");
//     // await page.getByRole('button', { name: 'Search' }).click();

//     await page.goto('https://www.saucedemo.com/');
//     await page.getByTestId("username").fill("standard_user");
// })