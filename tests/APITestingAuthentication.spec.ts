import { test, expect, request } from '@playwright/test';

// // 1.basic auth with header
// test('Authentication with API key', async ({ request }) => {

//     const response = await request.put("/booking/1", {
//         headers: {
//             "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
//         },
//         data: {
//             "firstname": "John",
//             "lastname": "Doe",
//             "totalprice": 111,
//             "depositpaid": true,
//             "bookingdates": {
//                 "checkin": "2018-01-01",
//                 "checkout": "2019-01-01"
//             },
//             "additionalneeds": "Breakfast"
//         }
//     })

//     expect(response.status()).toBe(200);
// })

// 2. basic auth passing the cookies
// test('Basic Auth', async ({ request }) => {
//     const respToken = await request.post("https://restful-booker.herokuapp.com/auth", {
//         data: {
//             "username": "admin",
//             "password": "password123"
//         }
//     })
//     // displaying token value
//     console.log(await respToken.json());
// })

// 3. token generation in beforeAll
let tokenValue;
test.beforeAll('Basic Auth', async ({ request }) => {
    const respToken = await request.post("https://restful-booker.herokuapp.com/auth", {
        data: {
            "username": "admin",
            "password": "password123"
        }
    })

    // saveing token value into variable
    tokenValue = (await respToken.json()).token

})

// 4. using token vaule for authorization in put call
test('Authentication of Put call using basic auth', async ({ request }) => {

    const respPut = await request.put("/booking/1", {
        headers:
        {
            Cookie: "token=" + tokenValue
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

    expect(respPut.status()).toBe(200);
})

// 5. using token vaule for authorization in delete call
test('Authentication of Delete call using basic auth', async ({ request }) => {
    const respDelete = await request.delete("booking/4", {
        headers: {
            Cookie: "token=" + tokenValue
        }
    })

    expect(respDelete.status()).toBe(201);
})


