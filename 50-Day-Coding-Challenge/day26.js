// Day 26 JavaScript Coding Challenge
// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

let ar1 = [1, 2, 3, 10, 5, 3, 14];
let ar2 = [1, 4, 5, 6, 14];

let ar = mergeLeft(ar1, ar2);
println(ar);

function mergeLeft(ar1, ar2) {
	let ar = [];

	for (let el of ar1) {
		if (!ar2.includes(el)) {
			ar.push(el);
		}
	}
	return ar;
}
