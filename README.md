# Test timing issue with jest 

Follow these instructions to reproduce the problem:

## Clone repository

```
git clone git@github.com:juan-fernandez/jest-reproducible-case.git
```

## Install dependencies

```
cd jest-reproducible-case
yarn
```

## Run `Button.test.tsx` test 

```
yarn test Button.test.tsx --no-cache
```

See the error is the following: 

```
 FAIL  ./Button.test.tsx
  tests
    ✕ should show login form (609 ms)
    ✓ should show login form 2 (393 ms)

  ● tests › should show login form

    thrown: "Exceeded timeout of 400 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      13 |
      14 | describe('tests', () => {
    > 15 |   test('should show login form', async () => {
         |   ^
      16 |     await runTest()
      17 |   })
      18 |   test('should show login form 2', async () => {

      at Button.test.tsx:15:3
      at Object.<anonymous> (Button.test.tsx:14:1)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        3.403 s
```


## Run `Button2.test.tsx` test 

This test file is exactly the same as `Button.test.tsx` _but the order of the tests is changed_: 

```
yarn test Button2.test.tsx --no-cache
```

```
 FAIL  ./Button2.test.tsx
  tests
    ✕ should show login form 2 (577 ms)
    ✓ should show login form (378 ms)

  ● tests › should show login form 2

    thrown: "Exceeded timeout of 400 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      13 |
      14 | describe('tests', () => {
    > 15 |   test('should show login form 2', async () => {
         |   ^
      16 |     await runTest()
      17 |   })
      18 |   test('should show login form', async () => {

      at Button2.test.tsx:15:3
      at Object.<anonymous> (Button2.test.tsx:14:1)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        3.244 s
```

## Outcome

Even though `Button.test.tsx` and `Button2.test.tsx` are running the same tests but in a different order, the only test that times out _is the first one_, regardless of what the tests are doing. 

## Expected outcome

The tests behave the same timing-wise. 