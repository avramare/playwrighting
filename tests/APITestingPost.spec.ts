import { expect, test } from "@playwright/test";

// Post call for API testing with assertion on status code
test('API testing Post call 1', async ({ request }) => {
    const response = await request.post("/booking", {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    })

    const jsonResponse = await response.json();
    console.log(jsonResponse);
    expect(response.status()).toBe(200);

})