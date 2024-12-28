import { test } from "@playwright/test";

// 1. passing header and body
test('API testing Put call', async ({ request }) => {

    const response = await request.put("/booking/1", {
        headers: {
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "John",
            "lastname": "Doe",
            "totalprice": 999,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    })

    const responseJson = await response.json();
    console.log(responseJson);
});