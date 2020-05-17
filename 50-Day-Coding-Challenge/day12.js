// Day 12 JavaScript Coding Challenge

// Challenge #12A
// Create a function that receives an array of numbers and returns an array containing only the positive numbers
// Requirement: Use a "for" loop

function getPositives(array) {
	let array2 = [];

	for (let i = 0; i < array.length; i++) {
		let el = array[i];

		if (el >= 0) {
			array2.push(el);
		}
	}
	return array2;
}

let array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let array2 = getPositives(array);

print(array2);

// Challenge #12B
// Create a function that receives an array of numbers and returns an array containing only the positive numbers
// Requirement: Use a "for...of" loop

function getPositives(array) {
	let array2 = [];

	for (let el of array) {
		if (el >= 0) {
			array2.push(el);
		}
	}
	return array2;
}

let array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let array2 = getPositives(array);

print(array2);

// Challenge #12C
// Create a function that receives an array of numbers and returns an array containing only the positive numbers
// Requirement: Use .filter() array method

function getPositives(array) {
	return array.filter((el) => el >= 0);
}

let array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let array2 = getPositives(array);
print(array2);
