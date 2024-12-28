import { expect, request, test } from "@playwright/test";

test('API Testing Delete call', async ({ request }) => {

    const response = await request.delete("/booking/3");
    expect(response.status()).toBe(201);

    const responseDeleteText = await response.text();
    console.log(responseDeleteText);
    expect (responseDeleteText).toEqual("Created")

})


test('API Testing Get call after Delete to get 404', async ({ request }) => {

    // const response = await request.delete("/booking/2");
    // expect(response.status()).toBe(201);
    // const responseDeleteText = await response.text();
    // console.log(responseDeleteText);
    // expect (responseDeleteText).toEqual("Created")

    // perfroming GET, 404
    const responseGet = await request.get("/booking/3")
    console.log(responseGet.status());
    expect(responseGet.status()).toBe(404)

})