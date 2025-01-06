import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import { CartPage } from "../pages/CartPage";

test('Cart verification', async ({ page }) => {
    // login
    const loginPageObj = new LoginPage(page);
    await loginPageObj.openApplication();
    await loginPageObj.login("standard_user", "secret_sauce");
    // adding to cart and checking cart count
    const homePageObj = new HomePage(page);
    await expect(homePageObj.homePageHeading).toHaveText('Swag Labs');
    await homePageObj.backPackAddToCart();
    // asserting cart item count and remove buttom visibility
    await expect(homePageObj.cartIcon).toHaveText("1");
    await expect(homePageObj.backPackRemoveButton).toBeVisible;
    await homePageObj.gotoCart();
    // asserting item link in cart
    const cartPageObj = new CartPage(page);
    await expect(cartPageObj.backpackItemLink).toHaveText("Sauce Labs Backpack")
})