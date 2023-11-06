// recursive solution

export function countChangeRecursively(change) {
  if (isNaN(change)) {
    return "Please enter a valid number.";
  
  } else if (change === 0) {
    return {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
  } else if (change >= 0.25) {
  const quarters = Math.floor(change / 0.25);
  const remainingChange = change - quarters * 0.25;
  const totalChange = countChangeRecursively(remainingChange)
    return {
    quarters: quarters + totalChange.quarters,
    dimes: totalChange.dimes,
    nickels: totalChange.nickels,
    pennies: totalChange.pennies
  };
  }
}
