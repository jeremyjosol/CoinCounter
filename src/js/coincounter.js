// recursive solution

export function countChangeRecursively(change) {
  if (!Number(change)) {
  return "Please enter a valid number.";
  }

  change = parseFloat(change.toFixed(2));

  const coinValues = [0.25, 0.10, 0.05, 0.01];
  const coinNames = ['quarters', 'dimes', 'nickels', 'pennies'];
  const coinCount = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
  
  if (change === 0) {
    return coinCount;
  }
  
  for (let i = 0; i < coinValues.length; i++) {
    const coinValue = coinValues[i];
    const coinName = coinNames[i];
  
    if (change >= coinValue) {
      const count = Math.floor(change / coinValue);
      coinCount[coinName] = count;
      const remainingChange = (change - count * coinValue);
      const totalChange = countChangeRecursively(remainingChange);
      coinCount.quarters + totalChange.quarters;
      coinCount.dimes + totalChange.dimes;
      coinCount.nickels + totalChange.nickels;
      coinCount.pennies + totalChange.pennies;
    } 
  }
  return coinCount;
}
