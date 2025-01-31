import { test, expect, Page } from "@playwright/test"

let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    // login
    await page.goto('https:www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
})

test.afterAll(async ({ }) => {
    // logout
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
})



test('Adding item to cart verification', async ({ }) => {


    // adding and remoing item from cart
    await page.getByText("Sauce Labs Backpack").click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('.shopping_cart_link').click();
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toHaveText("Sauce Labs Backpack")
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible();


})

test('Empty cart verification', async ({ }) => {

    // checking empty cart
    await page.locator('.shopping_cart_link').click();
    await expect(page.locator('.inventory_item_name')).not.toBeVisible();


})

// let Page testing example for before/afterAll
// let page: Page;

// test.beforeAll(async ({ browser }) => {
//     page = await browser.newPage()
//     //login
//     await page.goto('https:www.saucedemo.com/');
//     await page.locator('[data-test="username"]').fill("standard_user");
//     await page.locator('[data-test="password"]').fill("secret_sauce");
//     await page.locator('[data-test="login-button"]').click();
// })

// test.afterAll(async ({ }) => {
//     //logout
//     await page.getByRole('button', { name: 'Open Menu' }).click();
//     await page.getByRole('link', { name: 'Logout' }).click();
// })



// test('Adding item to cart verification', async ({ }) => {


//     //adding and remoing item from cart
//     await page.getByText("Sauce Labs Backpack").click();
//     await page.locator('[data-test="add-to-cart"]').click();
//     await page.locator('.shopping_cart_link').click();
//     await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toHaveText("Sauce Labs Backpack")
//     await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
//     await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
//     await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible();


// })

// test('Empty cart verification', async ({ }) => {

//     //checking empty cart
//     await page.locator('.shopping_cart_link').click();
//     await expect(page.locator('.inventory_item_name')).not.toBeVisible();


// })