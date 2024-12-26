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