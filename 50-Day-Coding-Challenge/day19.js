// Day 19 JavaScript Coding Challenge
// Create a function that will return in an array the first "nPrimes" prime numbers greater than a number "startAt"

function getPrimes(nPrimes, startAt) {
	let array = [];

	let i = startAt;

	while (array.length < nPrimes) {
		if (isPrime(i)) {
			array.push(i);
		}
		i++;
	}
	return array;
}

function isPrime(n) {
	if (n < 2) return false;

	if (n == 2) return true;

	let maxDiv = Math.sqrt(n);

	for (let i = 2; i <= maxDiv; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}
