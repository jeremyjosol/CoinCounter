import { countChangeRecursively } from './../src/js/coincounter.js';

describe('countChangeRecursively', () => {
  test('it should return NaN if a special character is passed in', () => {
    const userInput = countChangeRecursively("!");
    expect(userInput).toEqual("Please enter a valid number.");
  });

  test('it should return NaN if a number < 0 is passed in', () => {
    const userInput = countChangeRecursively(-1);
    expect(userInput).toEqual("Please enter a valid number.");
  });

  test('it should return NaN if 0 is passed in', () => {
    const userInput = countChangeRecursively(0);
    expect(userInput).toEqual({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    });
  });

  test('quarters should return 1 if 0.25 is passed in', () => {
    const userInput = countChangeRecursively(0.25);
    expect(userInput).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 0
    });
  });

  test('quarters should return 2 if 0.50 is passed in', () => {
    const userInput = countChangeRecursively(0.50);
    expect(userInput).toEqual({
      quarters: 2,
      dimes: 0,
      nickels: 0,
      pennies: 0
    });
  });

  test('quarters should return 2 & dimes should return 1 if 0.60 is passed in', () => {
    const userInput = countChangeRecursively(0.60);
    expect(userInput).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 0,
      pennies: 0
    });
  });

  test('quarters should return 2, dimes should return 1, nickels should return 1, & pennies should return 3 if 0.68 is passed in', () => {
    const userInput = countChangeRecursively(0.68);
    expect(userInput).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3
    });
  });
});