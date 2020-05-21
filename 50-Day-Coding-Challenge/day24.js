// Day 24 JavaScript Coding Challenge
// Create a function that will merge two array and return the result as a new array

// Input: Two arrays
// Output: One merged array

let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];

let ar = mergeArrays(ar1, ar2);
println(ar);

function mergeArrays(ar1, ar2) {
	let ar = [];

	for (let el of ar1) {
		ar.push(el);
	}

	for (let el of ar2) {
		ar.push(el);
	}
	return ar;
}
