import { test, request } from "@playwright/test";

// 3. baseURL before all, new Context, extraHTTPHeaders
let reqContext2
test.beforeAll("Before all the tests...", async () => {
    reqContext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    })
})


// 1.baseURL passed to http method, API RequestContext, passing header
test('API testing GET practice 1', async ({ request }) => {

    const response = await request.get("https://restful-booker.herokuapp.com/booking", {
        headers: {
            Accept: "application/json"
        }
    });
    console.log(await response.json());

})

// 2.baseURL passed with NewContext , API Request, extraHTTPHeaders
test('API testing GET practice 2', async () => {
    const reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    });
    const response = await reqContext.get("/booking");
    console.log(await response.json());

})

// 3.baseURL passed with reqContext2
test('API testing GET practice 3', async () => {

    const response = await reqContext2.get("/booking");
    console.log(await response.json());

})

// 4.baseURL, extraHTTPHeaders in playwright confing
test('API testing GET practice 4', async ({ request }) => {

    const response = await request.get("/booking");
    console.log(await response.json());
})

// 5. Get call with path parameter
test('API testing GET practice 5', async ({ request }) => {

    const response = await request.get("/booking/895");
    console.log(await response.json());

})

// 6. Get call with query parameter
test('API testing GET practice 6', async ({ request }) => {

    const response = await request.get("/booking/?firstname=john&lastname=smith");
    console.log(await response.json());

})

// 7. Get call with query parameter
test('API testing GET practice 7', async ({ request }) => {

    const response = await request.get("/booking", {
        params: {
            firstname: "John",
            lastname: "Smith"
        }
    });
    console.log(await response.json());

})