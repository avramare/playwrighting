import { expect, test } from "@playwright/test";
import ApiJson from "../testdata/apidata.json"

test('API Testing - Pass Request Body from JSON for POST Call', async ({ request }) => {

    const responsePost = await request.post("/booking", {
        data: ApiJson
    })

    const responsePostJson = await responsePost.json();
    expect(responsePostJson.booking).toMatchObject(ApiJson);

    expect(responsePostJson.booking.additionalneeds).toEqual(ApiJson.additionalneeds);

})

test('API Testing - Pass Request Payload from JSON for Put Call', async ({ request }) => {

})