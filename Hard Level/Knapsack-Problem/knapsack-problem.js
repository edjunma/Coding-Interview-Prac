// JavaScript Solution
// O(nc) time | O(nc) space

function knapsackProblem(items, capacity) {
	const knapsackValues = [];
	for (let i = 0; i < items.length + 1; i++) {
		const row = new Array(capacity + 1).fill(0);
		knapsackValues.push(row);
	}
	for (let i = 1; i < items.length + 1; i++) {
		const currentWeight = items[i - 1][1];
		const currentValue = items[i - 1][0];
	}
}
