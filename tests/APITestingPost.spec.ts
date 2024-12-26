import { expect, test } from "@playwright/test";

// Post call for API testing with assertion on status
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

// Post call for API testing with assertion on statusText
test('API testing Post call 2', async ({ request }) => {
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
    expect(response.statusText()).toBe("OK");

})

// Post call for API testing with assertion toBeTruthy
test('API testing Post call 3', async ({ request }) => {
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
    expect(response.ok()).toBeTruthy();

})

// Post call for API testing with assertion toMatchObject from response
test('API testing Post call 4', async ({ request }) => {
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
    expect(jsonResponse.booking).toMatchObject({
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    });

    // additional assertion
    expect(jsonResponse.booking.additionalneeds).toEqual("Breakfast")

})

// Testing API with UI verification
test('API with UI verification', async ({ request }) => {
    const response = await request.post("https://api.demoblaze.com/addtocart", {
        data: {"id":"2cb2aa3e-ad3c-fe4d-262e-c79c0225666d","cookie":"user=82bbab5e-8c2a-9450-9d3f-de2936ccc6cd","prod_id":3,"flag":false}
    })

    expect(response.status()).toBe(200);
})