// Day 47 Coding Challenge
// Deep copy a jagged array with numbers or other arrays in a new array

var ar1 = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
var ar2 = copyArray(ar1);

println(ar2);

function copyArray(ar) {
	var ar2 = [];

	for (let el of ar) {
		if (Array.isArray(el)) {
			el = copyArray(el);
		}
		ar2.push(el);
	}
	return ar2;
}
