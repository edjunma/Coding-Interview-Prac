// JavaScript Solution
// O(n) time | O(n) space

function waterArea(heights) {
	const maxes = new Array(heights.length).fill(0);
	let leftMax = 0;
	for (let i = 0; i < heights.length; i++) {
		const height = heights[i];
		maxes[i] = leftMax;
		leftMax = Math.max(leftMax, height);
	}
	let rightMax = 0;
}
