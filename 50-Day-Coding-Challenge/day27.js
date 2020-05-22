// Day 27 Coding Challenge
// Challenge #27A
// Create a function that will receive an array of numbers as arguments and will return a new array with distinct elements

let ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
println(ar);

function getDistinctElements(ar) {
	let ar2 = [];

	for (let i = 0; i < ar.length; i++) {
		if (!isInArray(ar[i], ar2)) {
			ar2.push(ar[i]);
		}
	}
	return ar2;
}

function isInArray(n, ar) {
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === n) return true;
	}

	return false;
}
