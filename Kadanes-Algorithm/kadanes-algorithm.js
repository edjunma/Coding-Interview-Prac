// JavaScript Solution
// O(n) time | O(1) space - where n is the length of the input array

function kadanesAlgorithm(array) {
	let maxEndingHere = array[0];
	let maxSoFar = array[0];
	for (let i = 1; i < array.length; i++) {
		const num = array[i];
		maxEndingHere = Math.max(num, maxEndingHere + num);
		maxSoFar = Math.max(maxSoFar, maxEndingHere);
	}
	return maxSoFar;
}
