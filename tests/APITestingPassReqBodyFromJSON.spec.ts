import { expect, test } from "@playwright/test";
import ApiJson from "../testdata/apidata.json"

test('API Testing - Pass Request Body from JSON for POST Call', async ({ request }) => {

    const responsePost = await request.post("/booking", {
        data: ApiJson.PostCallData
    })

    const responsePostJson = await responsePost.json();
    expect(responsePostJson.booking).toMatchObject(ApiJson.PostCallData);

    expect(responsePostJson.booking.additionalneeds).toEqual(ApiJson.PostCallData.additionalneeds);

})

test('API Testing - Pass Request Payload from JSON for Put Call', async ({ request }) => {

    const responsePut = await request.put("/booking/1", {
        data: ApiJson.PutCallData
    });

    const responsePutJson = await responsePut.json();
    expect(responsePutJson).toMatchObject(ApiJson.PutCallData);

    expect(responsePutJson.firstname).toEqual(ApiJson.PutCallData.firstname);
})