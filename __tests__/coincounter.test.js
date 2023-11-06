import { countChangeRecursively } from './../src/js/coincounter.js';

describe('countChangeRecursively', () => {
  test('it should return NaN if a special character is passed in', () => {
    const userInput = countChangeRecursively("!");
    expect(userInput).toEqual("Please enter a valid number.");
  });
});