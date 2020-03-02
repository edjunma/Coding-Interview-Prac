// JavaScript Solution
// O(n) time | O(log(n)) space

function maxPathSum(tree) {
	const [_, maxSum] = [...findMaxSum(tree)];
	return maxSum;
}
