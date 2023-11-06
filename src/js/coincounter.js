// recursive with closure solution 

export function countChangeRecursively(change) {
  if (isNaN(change) || change < 0) {
    return "Please enter a valid number.";
  }

  const coinValues = [25, 10, 5, 1];
  const coinNames = ['quarters', 'dimes', 'nickels', 'pennies'];

  const coinCount = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  const changeInCents = Math.round(change * 100);

  function calculateChange(remainingChange, coinIndex) {
    if (remainingChange === 0) {
      return coinCount; 
    }

    if (coinIndex >= coinValues.length) {
      return; 
    }

    const coinValue = coinValues[coinIndex];
    const coinName = coinNames[coinIndex];

    if (remainingChange >= coinValue) {
      const numCoins = Math.floor(remainingChange / coinValue);
      coinCount[coinName] += numCoins;
      return calculateChange(remainingChange - numCoins * coinValue, coinIndex + 1);
    } else {
      return calculateChange(remainingChange, coinIndex + 1);
    }
  }

  calculateChange(changeInCents, 0);

  return coinCount;
}