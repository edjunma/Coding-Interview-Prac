// Day 13 JavaScript Coding Challenge
// Find the maximum number in an array of numbers

function findMaxNum(array) {
	let max = array[0];

	for (let i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

let array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max = findMax(array);
println('Max: ', max);
