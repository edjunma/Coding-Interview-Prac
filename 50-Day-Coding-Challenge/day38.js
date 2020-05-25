// Day 38 Coding Challenge
// Create a function that will convert an array containing ASCII codes in a string

function codeToString(ar) {
	return String.fromCharCode(...ar);
}

println(
	codeToString([73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116])
);
