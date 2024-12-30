import { test, request, expect } from "@playwright/test";

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

// 8. Assertions on API response : response.status()).toBe(200)
test('API testing GET practice 8', async ({ request }) => {

    const response = await request.get("/booking/240");
    console.log(await response.json());
    expect(response.status()).toBe(200);
})
// 8.1 response.ok()).toBeTruthy()
test('API testing GET practice 8.1', async ({ request }) => {

    const response = await request.get("/booking/240");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
})
// 8.2 response.json()).toMatchObject
test('API testing GET practice 8.2', async ({ request }) => {

    const response = await request.get("/booking/2838");
    console.log(await response.json());
    expect(await response.json()).toMatchObject({
        firstname: 'Josh',
        lastname: 'Allen',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'super bowls'
    });

    // response.toEqual()
    const jsonResponse = await response.json()
    expect(jsonResponse.firstname).toEqual("Josh")
})

// 9. Validate UI response against UI
test('API with UI verification', async ({ request, page }) => {
    const response = await request.get("https://api.demoblaze.com/entries")
    const jsonResponse = await response.json();
    console.log(jsonResponse.Items[0].title);
    await page.goto("https://www.demoblaze.com/");
    expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(jsonResponse.Items[0].title);        
})

