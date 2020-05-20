// Day 18 JavaScript Coding Challenge
// Print the first 100 prime numbers

function printPrimeNums(nPrimes) {
  let n = 0;
  let i = 2;

  while(n < nPrimes) {
    if (isPrime(i)) {
      println(n, " -->", i);
      n++;
    }
    i++;
  }
}

function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  let maxDiv = Math.sqrt(n);

  for(let i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

printPrimeNums(100);