// Day 21 JavaScript Coding Challenge
// Rotate an array to the right 1 position

let array = [1, 2, 3];
rotateRight(array);
println(array);

function rotateRight(array) {
	let last = array.pop();
	array.unshift(last);
}
