// recursive solution

function countChangeRecursively(change) {
  if (isNaN(change)) {
    return "Please enter a valid number.";
  
  } else if (change === 0) {
    return {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
  }
}