// Day 16 JavaScript Coding Challenge
// Create a function that will return a Boolean specifying if a number is prime

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  let maxDiv = Math.sqrt(n);

  for(let i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

