// Day 11 JavaScript Coding Challenge
// Calculate the average of the numbers in an array of numbers
// Example array: [1, 3, 9, 15, 90]
// Expected output: 23.6

function avgArray(array) {
	let n = array.length;
	let sum = 0;

	for (let i = 0; i < n; i++) {
		sum += array[i];
	}

	return sum / n;
}

let ar = [1, 3, 9, 15, 90];
let average = avgArray(array);

print('Average: ', average);
