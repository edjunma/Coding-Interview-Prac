// Day 10 JavaScript Coding Challenge
// Calculate the sum of numbers in an array of numbers.
// Example array: [2, 3, -1, 5, 7, 9, 10, 15, 95]
// Expected output: 145

function sumOfArray(array) {
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum;
}

let array = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumOfArray(array);
return sum;
