// Day 45 Coding Challenge
// Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays or numbers on an unlimited number of levels)

var ar = [1, 2, [15, [23], [5, 12]], [100]];

println(sumArray(ar));

function sumArray(ar) {
	let sum = 0;

	for (let el of ar) {
		if (Array.isArray(el)) {
			el = sumArray(el);
		}
		sum += el;
	}
	return sum;
}
