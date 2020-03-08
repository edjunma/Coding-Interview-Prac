// JavaScript Solution #1
// O(n^2) time | O(n) space

function minNumberOfJumps(array) {
	const jumps = new Array(array.length).fill(Infinity);
	jumps[0] = 0;
	for (let i = 1; i < array.length; i++) {
		for (let j = 1; j < i; j++) {
			if (array[j] >= i - j) {
				jumps[i] = Math.min(jumps[j] + 1, jumps[i]);
			}
		}
	}
	return jumps[jumps.length - 1];
}
