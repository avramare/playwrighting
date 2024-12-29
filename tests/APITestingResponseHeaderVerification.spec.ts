import { expect, test } from "@playwright/test";

test('Fetch and validate response header', async ({ request }) => {

    const getRespnse = await request.get("booking/1");
    const headerValue = getRespnse.headers();
    console.log(headerValue);
    expect(headerValue.server).toEqual("Cowboy");
    expect(headerValue["x-powered-by"]).toEqual("Express");

    const headersArrayValue = getRespnse.headersArray()
    console.log(headersArrayValue)
    expect(headersArrayValue.length).toBe(11);
    // prinit v1
    // headersArrayValue.forEach((header) => {
    //     console.log(header)
    // })
    // print v2
    headersArrayValue.forEach((header) => {
        console.log(header.name + "::" + header.value)
    })

})

// Fail test
test('Failing Fetch and validate response header', async ({ request }) => {

    const getRespnse = await request.get("booking/1");
    const headerValue = getRespnse.headers();
    console.log(headerValue);
    expect(headerValue.server).toEqual("Cowboy1");
    expect(headerValue["x-powered-by"]).toEqual("Express2");

    const headersArrayValue = getRespnse.headersArray()
    console.log(headersArrayValue)
    expect(headersArrayValue.length).toBe(12);
})