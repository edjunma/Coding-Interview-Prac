// Day 22 JavaScript Coding Challenge
// Reverse an array

function reverseArray(array) {
	let array2 = [];

	for (let i = array.length - 1; i >= 0; i--) {
		array2.push(array[i]);
	}

	return array2;
}

let array = [1, 2, 3];
let array2 = reverseArray(array);
println(array2);
