// Day 40 Coding Challenge
// Implement the bubble sort algorithm for an array of numbers

function bubbleSort(ar) {
	let shouldSort = true;

	while (shouldSort) {
		shouldSort = false;

		for (let i = 0; i < ar.length; i++) {
			var a = ar[i];
			if (a > ar[i + 1]) {
				ar[i] = ar[i + 1];
				ar[i + 1] = a;
				shouldSort = true;
			}
		}
	}
}

var ar = [23, 1000, 1, -1, 8, 3];
println(ar);
bubbleSort(ar);
println(ar);
