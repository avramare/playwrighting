import { test, expect } from "@playwright/test";

//skip tip
// test.skip(({ browserName }) => browserName === "chromium")
test.describe("Practice of describe", async () => {

    //test.fail in describe block
    test.fail(({browserName})=>browserName==="chromium")

    test('Practice test 1', async ({ page }) => {
        console.log("Starting Practice test 1");
        console.log("Ending Practice test 1");
    })

    test('Practice test 2', async ({ page }) => {
        console.log("Starting Practice test 2");
        console.log("Ending Practice test 2");
    })

    test('Practice test 3', async ({ page }) => {
        console.log("Starting Practice test 3");
        console.log("Ending Practice test 3");
    })
})


test('Practice test 4', async ({ page, browserName }) => {
    //setTimeout
    // test.setTimeout(50000);
    console.log("Starting Practice test 4");
    console.log("Ending Practice test 4");
})

test('Practice test 5', async ({ page, browserName }) => {
    //testShouldFail
    // test.fail();
    // test.fail(browserName==="firefox");
    console.log("Starting Practice test 5");
    console.log("Ending Practice test 5");
})

test('Practice test 6', async ({ page }) => {
    console.log("Starting Practice test 6");
    console.log("Ending Practice test 6");
})

//Skip
// test.describe("Practice of describe", async () => {
//     test.skip(({ browserName }) => browserName === "chromium")
//     test('Practice test 1', async ({ page }) => {
//         console.log("Starting Practice test 1");
//         console.log("Ending Practice test 1");
//     })

//Fixme
// test.fixme('Practice test 4', async ({ page, browserName }) => {
//     console.log("Starting Practice test 4");
//     console.log("Ending Practice test 4");
// })