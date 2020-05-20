// Day 20 JavaScript Coding Challenge
// Rotate an array to the left 1 position

function rotateLeft(array) {
	let first = array.shift();
	array.push(first);
}

let array = [1, 2, 3];
rotateLeft(array);
println(array);
