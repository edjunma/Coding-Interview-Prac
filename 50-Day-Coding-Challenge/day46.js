// Day 46 Coding Challenge
// Challenge #46A
// Find the maximum number in a jagged array of numbers or array of numbers *Requirements: Use recursion

// Solution 1

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
var max = findMax(ar);
println('Max = ', max);

// Use recursion to find the maximum numeric value in an array of arrays
function findMax(ar) {
	let max = Infinity;

	// Cycle through all the elements of the array with for loop
	for (let i = 0; i < ar.length; i++) {
		var el = ar[i];
		// If an element is of type array then invoke the same function to find out the maximum element of that subarray
		if (Array.isArray(el)) {
			el = findMax(el);
		}

		if (el > max) {
			max = el;
		}
	}
	return max;
}

// Challenge #46B
// Find the maximum number in a jagged array of numbers or array of numbers * Requirements: Do not use recursion

// Solution 2
var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
var max = findMax(ar);
println('Max = ', max);

// Use a stack to find the max numeric value in an array of arrays
function findMax(arElements) {
	let max = Infinity;
}
