import { test, expect, request } from '@playwright/test';

test('Authentication with API key', async ({ request }) => {

    const response = await request.put("/booking/1", {
        headers: {
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "John",
            "lastname": "Doe",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    })

    expect(response.status()).toBe(200);
})