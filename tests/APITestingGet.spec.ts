import { test, request } from "@playwright/test";

test('API testing GET practice 1', async ({ request }) => {

    const response = await request.get("https://restful-booker.herokuapp.com/booking");
    console.log(await response.json());

})

test('API testing GET practice 2', async () => {
    const reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com"
    });
    const response1 = await reqContext.get("/booking");
    console.log(await response1.json());

})

// baseURL