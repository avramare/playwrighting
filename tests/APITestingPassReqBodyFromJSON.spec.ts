import { expect, test } from "@playwright/test";
import ApiJson from "../testdata/apidata.json"

test('API Testing - Pass Request Body from JSON for POST Call', async ({ request }) => {

    const responsePost = await request.post("/booking", {
        data:
        {
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

    const responsePostJson = await responsePost.json();
    expect(responsePostJson.booking).toMatchObject({
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    });

    expect(responsePostJson.booking.additionalneeds).toEqual("Breakfast");

})

test('API Testing - Pass Request Payload from JSON for Put Call', async ({ request }) => {

})