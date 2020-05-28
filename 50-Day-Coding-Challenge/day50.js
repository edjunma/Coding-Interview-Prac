// Day 50 Coding Challenge - FIN~!
// Create a function that will receive n as argument and return an array of n random numbers from 1 to n

println(getRandomNumbers(10));

function getRandomNumbers(n) {
	var ar = [];

	for (let i = 1; i <= n; i++) {
		ar.push(i);
	}

	shuffleArray(ar);

	return ar;
}

// Shuffle array implemented using fisher-yates shuffle algo

function shuffleArray(ar) {
	for (let i = ar.length - 1; i > 0; i--) {
		var j = randomInt(0, i - 1);
		var t = ar[i];
		ar[i] = ar[j];
		ar[j] = t;
	}
	return ar;
}

// Get a random int between min and max (both included)
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
