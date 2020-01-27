// JavaScript Solution
// BST input class

class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// O(n) time | O(d) space
function validateBst(tree) {
	return validateBstHelper(tree, -Infinity, Infinity);
}
