import { test as baseTest } from "@playwright/test";

type MyFixtures = {
    fixture1: any
}

type MyWorkersFixtures = {
    workerFixture1: any
}

// baseTest.extend<{ fixture1: any }>({

//     fixture1: 
// })

export const test = baseTest.extend<MyFixtures, MyWorkersFixtures>({

    fixture1: async ({ }, use) => {
        const fixture1 = "I am fixture1 ";
        console.log("Before part of fixture1");
        await use(fixture1);
        console.log("After part of fixture1");
    },

    workerFixture1: [async ({ }, use) => {
        const workerFixture1 = "I am workerFixture1 ";
        console.log("Before part of workerFixture1");
        await use(workerFixture1);
        console.log("After part of workerFixture1");
    }, { scope: "worker" }]

})