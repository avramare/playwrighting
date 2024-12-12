import { test, expect } from "@playwright/test"




test("Practice test 1", async ({ page }) => {
    console.log("Starting Practice test 1");
    await page.goto('https:www.saucedemo.com/');
    console.log(await page.title());
    console.log("Ending Practice test 1");
})

test("Practice test 2", async ({ page }) => {
    console.log("Starting Practice test 2");
    await page.goto('https:www.saucedemo.com/');
    console.log(await page.title());
    console.log("Ending Practice test 2");
})

test("Practice test 3", async ({ page }) => {
    console.log("Starting Practice test 3");
    await page.goto('https:www.saucedemo.com/');
    console.log(await page.title());
    console.log("Ending Practice test 3");
})

test.describe("Practice of describe", async () => {


    test("Practice test 4", async ({ page, browserName }) => {
        console.log("Starting Practice test 4");
        await page.goto('https:www.saucedemo.com/');
        console.log(await page.title());
        console.log("Ending Practice test 4");
    })

    test("Practice test 5", async ({ page, browserName }) => {
        console.log("Starting Practice test 5");
        await page.goto('https:www.saucedemo.com/');
        console.log(await page.title());
        console.log("Ending Practice test 5");
    })

    test("Practice test 6", async ({ page, browserName }) => {
        console.log("Starting Practice test 6");
        await page.goto('https:www.saucedemo.com/');
        console.log(await page.title());
        console.log("Ending Practice test 6");
    })
})

test("Practice test 7", async ({ page }) => {
    console.log("Starting Practice test 7");
    await page.goto('https:www.saucedemo.com/');
    console.log(await page.title());
    console.log("Ending Practice test 7");
})



// //Multiple Hooks
// test.beforeAll("Practice of beforeAll", async () => {
//     console.log("Executing beforeAll")
// });

// test.afterAll("Practice of afterAll", async () => {
//     console.log("Executing afterAll ")
// });

// test.beforeEach( async()=>{
//     console.log("Execution of beforeEach 1")
// })

// test.beforeEach( async()=>{
//     console.log("Execution of beforeEach 2")
// })

// test.beforeEach( async()=>{
//     console.log("Execution of beforeEach 3")
// })

// test.afterEach( async()=>{
//     console.log("Execution of afterEach 1")
// })

// test("Practice test 1", async ({ page }) => {
//     console.log("Starting Practice test 1");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 1");
// })

// test("Practice test 2", async ({ page }) => {
//     console.log("Starting Practice test 2");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 2");
// })

// test("Practice test 3", async ({ page }) => {
//     console.log("Starting Practice test 3");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 3");
// })

// test.describe("Practice of describe", async () => {


//     test("Practice test 4", async ({ page, browserName }) => {
//         console.log("Starting Practice test 4");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 4");
//     })

//     test("Practice test 5", async ({ page, browserName }) => {
//         console.log("Starting Practice test 5");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 5");
//     })

//     test("Practice test 6", async ({ page, browserName }) => {
//         console.log("Starting Practice test 6");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 6");
//     })
// })

// test("Practice test 7", async ({ page }) => {
//     console.log("Starting Practice test 7");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 7");
// })





// //afterAll
// test.afterAll("Practice of afterAll", async () => {
//     console.log("Executing afterAll ")
// });

// test("Practice test 1", async ({ page }) => {
//     console.log("Starting Practice test 1");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 1");
// })

// test("Practice test 2", async ({ page }) => {
//     console.log("Starting Practice test 2");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 2");
// })

// test("Practice test 3", async ({ page }) => {
//     console.log("Starting Practice test 3");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 3");
// })

// test.describe("Practice of describe", async () => {

//     //afterAll in describe
//     test.afterAll("Practice of afterAll", async () => {
//         console.log("Executing afterAll  in describe")
//     });

//     test("Practice test 4", async ({ page, browserName }) => {
//         console.log("Starting Practice test 4");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 4");
//     })

//     test("Practice test 5", async ({ page, browserName }) => {
//         console.log("Starting Practice test 5");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 5");
//     })

//     test("Practice test 6", async ({ page, browserName }) => {
//         console.log("Starting Practice test 6");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 6");
//     })
// })

// test("Practice test 7", async ({ page }) => {
//     console.log("Starting Practice test 7");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 7");
// })


// //beforeAll
// test.beforeAll("Practice of beforeAll", async () => {
//     console.log("Executing beforeAll ")
// });

// test("Practice test 1", async ({ page }) => {
//     console.log("Starting Practice test 1");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 1");
// })

// test("Practice test 2", async ({ page }) => {
//     console.log("Starting Practice test 2");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 2");
// })

// test("Practice test 3", async ({ page }) => {
//     console.log("Starting Practice test 3");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 3");
// })

// test.describe("Practice of describe", async () => {

//     //beforeAll in describe
//     test.beforeAll("Practice of beforeAll", async () => {
//         console.log("Executing beforeAll  in describe")
//     });

//     test("Practice test 4", async ({ page, browserName }) => {
//         console.log("Starting Practice test 4");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 4");
//     })

//     test("Practice test 5", async ({ page, browserName }) => {
//         console.log("Starting Practice test 5");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 5");
//     })

//     test("Practice test 6", async ({ page, browserName }) => {
//         console.log("Starting Practice test 6");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 6");
//     })
// })

// test("Practice test 7", async ({ page }) => {
//     console.log("Starting Practice test 7");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 7");
// })




//afterEach 
// test("Practice test 1", async ({ page }) => {
//     console.log("Starting Practice test 1");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 1");
// })

// test("Practice test 2", async ({ page }) => {
//     console.log("Starting Practice test 2");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 2");
// })

// test("Practice test 3", async ({ page }) => {
//     console.log("Starting Practice test 3");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 3");
// })

// test.describe("Practice of describe", async () => {

//afterEach in describe
// test.afterEach(async () => {
//     console.log("Executing afterEach in describe")
// })

//     test("Practice test 4", async ({ page, browserName }) => {
//         console.log("Starting Practice test 4");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 4");
//     })

//     test("Practice test 5", async ({ page, browserName }) => {
//         console.log("Starting Practice test 5");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 5");
//     })

//     test("Practice test 6", async ({ page, browserName }) => {
//         console.log("Starting Practice test 6");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 6");
//     })
// })

// test("Practice test 7", async ({ page }) => {
//     console.log("Starting Practice test 7");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 7");
// })

// test.afterEach(async () => {
//     console.log("Executing afterEach")
// })

//beforeEach in describe
// test("Practice test 1", async ({ page }) => {
//     console.log("Starting Practice test 1");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 1");
// })

// test("Practice test 2", async ({ page }) => {
//     console.log("Starting Practice test 2");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 2");
// })

// test("Practice test 3", async ({ page }) => {
//     console.log("Starting Practice test 3");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 3");
// })

// test.describe("Practice of describe", async () => {

//     test.beforeEach("Practice of beforeEach", async () => {
//         console.log("Executing beforeEach ")
//     })

//     test("Practice test 4", async ({ page }) => {
//         console.log("Starting Practice test 4");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 4");
//     })

//     test("Practice test 5", async ({ page }) => {
//         console.log("Starting Practice test 5");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 5");
//     })

//     test("Practice test 6", async ({ page }) => {
//         console.log("Starting Practice test 6");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 6");
//     })
// })

// test("Practice test 7", async ({ page }) => {
//     console.log("Starting Practice test 7");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 7");
// })


//1.st setup
// test.beforeEach("Practice of beforeEach", async () => {
//     console.log("Executing beforeEach")
// })


// test("Practice test 1", async ({ page }) => {
//     console.log("Starting Practice test 1");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 1");
// })

// test("Practice test 2", async ({ page }) => {
//     console.log("Starting Practice test 2");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 2");
// })

// test("Practice test 3", async ({ page }) => {
//     console.log("Starting Practice test 3");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 3");
// })

// test.describe("Practice of describe", async () => {

//     test("Practice test 4", async ({ page }) => {
//         console.log("Starting Practice test 4");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 4");
//     })

//     test("Practice test 5", async ({ page }) => {
//         console.log("Starting Practice test 5");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 5");
//     })

//     test("Practice test 6", async ({ page }) => {
//         console.log("Starting Practice test 6");
//         await page.goto('https:www.saucedemo.com/');
//         console.log(await page.title());
//         console.log("Ending Practice test 6");
//     })
// })

// test("Practice test 7", async ({ page }) => {
//     console.log("Starting Practice test 7");
//     await page.goto('https:www.saucedemo.com/');
//     console.log(await page.title());
//     console.log("Ending Practice test 7");
// })