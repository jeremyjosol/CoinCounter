import { countChangeRecursively } from './../src/js/coincounter.js';

describe('countChangeRecursively', () => {
  test('it should return NaN if a special character is passed in', () => {
    const userInput = countChangeRecursively("!");
    expect(userInput).toEqual("Please enter a valid number.");
  });

  test('it should return all coin property values as 0 if 0 is passed in', () => {
    const userInput = countChangeRecursively(0);
    expect(userInput).toEqual({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    });
  });
});