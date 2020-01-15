// Find Closest Value in BST
// My solution
// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space
function findClosestValueInBst(tree, target) {
	return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
	if (tree === null) return closest;
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	if (target < tree.value) {
		return findClosestValueInBstHelper(tree.left, target, closest);
	} else if (target > tree.value) {
		return findClosestValueInBstHelper(tree.right, target, closest);
	} else {
		return closest;
	}
}

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space

function findClosestValueInBst(tree, target) {
	return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
	let currentNode = tree;
	while (currentNode !== null) {
		if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
			closest = currentNode.value;
		}
		if (target < currentNode.value) {
			currentNode = currentNode.left;
		} else if (target > currentNode.value) {
			currentNode = currentNode.right;
		} else {
			break;
		}
	}
}
