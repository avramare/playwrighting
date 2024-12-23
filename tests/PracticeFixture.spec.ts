import { test } from "../fixtures/MyCustomFixtures";

test('Practice test 1', async ({ fixture1, workerFixture1 }) => {
    console.log(fixture1);
    console.log(workerFixture1);
})

test('Practice test 2', async ({ fixture1, workerFixture1 }) => {
    console.log(fixture1);
    console.log(workerFixture1);
})