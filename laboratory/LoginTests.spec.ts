import { test, expect } from "@playwright/test"

// test.slow(({browserName})=>browserName==="firefox")
test('Title verification', async ({ page }) => {
    await page.goto('https:www.saucedemo.com/');
    await expect(page).toHaveTitle("Swag Labs")
})

test('Sucecessfull login verification', async ({ page, browserName }) => {
    //test.slow annotation
    //test.slow();
    //test.slow(browserName==="chromium")
    await page.goto('https:www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('#shopping_cart_container a')).toBeVisible();
})

// test('Unsucecessfull login verification', async ({ page }) => {
//     await page.goto('https:www.saucedemo.com/');
//     await page.locator('[data-test="username"]').fill("standard_user_wrong");
//     await page.locator('[data-test="password"]').fill("secret_sauce");
//     await page.locator('[data-test="login-button"]').click();
//     await expect(page.locator('#shopping_cart_container a')).toBeVisible();
// })