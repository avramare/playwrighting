import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

type PomFixtures = {

    loginPage: LoginPage;

}

baseTest.extend<PomFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})