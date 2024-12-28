import { expect, test } from "@playwright/test";

// 1. passing header and body, status code assertion
test('API testing Put call 1', async ({ request }) => {

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

    expect(response.status()).toBe(200);
});

// 2. passing header and body, statusText assertion
test('API testing Put call 2', async ({ request }) => {

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

    expect(response.statusText()).toBe("OK");
});

// 3. passing header and body, toBeTruthy assertion
test('API testing Put call 3', async ({ request }) => {

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

    expect(response.ok()).toBeTruthy();
});

// 4. passing header and body, toMantchObject assertion
test('API testing Put call 4', async ({ request }) => {

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

    expect(responseJson).toMatchObject({
        "firstname": "John",
        "lastname": "Doe",
        "totalprice": 999,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    });

    // additional assertion wih to Equal
    expect(responseJson.additionalneeds).toEqual("Breakfast");


    // adding Get call to cofirm Put executed correctly
    const responseGetBooking1= await request.get("booking/1");
    console.log(await responseGetBooking1.json());
    expect(await responseGetBooking1.json()).toMatchObject({
        "firstname": "John",
        "lastname": "Doe",
        "totalprice": 999,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    })
});