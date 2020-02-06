// JavaScript Solution
// Solution #1
// O(n) time | O(n) space

function invertBinaryTree(tree) {
	const queue = [tree];
	while (queue.length) {
		const current = queue.shift();
		if (current === null) continue;
		swapLeftAndRight(current);
		queue.push(current.left);
		queue.push(current.right);
	}
}

function swapLeftAndRight(tree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}

// Solution #2
// O(n) time | O(d) space
function invertBinaryTree(tree) {
	if (tree === null) return;
	swapLeftAndRight(tree);
	invertBinaryTree(tree.left);
	invertBinaryTree(tree.right);
}

function swapLeftAndRight(tree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}
