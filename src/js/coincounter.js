// recursive solution

export function countChangeRecursively(change) {
  if (isNaN(change)) {
  return "Please enter a valid number.";
  }

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
      const remainingChange = (change % coinValue);
      const totalChange = countChangeRecursively(remainingChange);
    
      const result = {
        quarters: coinCount.quarters + totalChange.quarters,
        dimes: coinCount.dimes + totalChange.dimes,
        nickels: coinCount.nickels + totalChange.nickels,
        pennies: coinCount.pennies + totalChange.pennies,
      };
      return result;
    } 
  }
}
