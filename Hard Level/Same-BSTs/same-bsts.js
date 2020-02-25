// JavaScript Solution #1
// O(n^2) time | O(n^2) space - where n is the number of nodes in each array respectively

function sameBsts(arrayOne, arrayTwo) {
	if (arrayOne.length !== arrayTwo.length) return false;

	if (arrayOne.length === 0 && arrayTwo.length === 0) return true;

	if (arrayOne[0] !== arrayTwo[0]) return false;

	const leftOne = getSmaller(arrayOne);
	const leftTwo = getSmaller(arrayTwo);
	const rightOne = getBiggerOrEqual(arrayOne);
	const rightTwo = getBiggerOrEqual(arrayTwo);

	return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array) {
	const smaller = [];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < array[0]) smaller.push(array[i]);
	}
	return smaller;
}

function getBiggerOrEqual(array) {
	const biggerOrEqual = [];
	for (let i = 1; i < array.length; i++) {
		if (array[i] >= array[0]) biggerOrEqual.push(array[i]);
	}
	return biggerOrEqual;
}

// Solution #2
// O(n^2) time | O(d) space - where n is the number of nodes in each array, respectively, and d is the depth of the BST that they represent

function sameBsts(arrayOne, arrayTwo) {
	return areSameBsts(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
}

function areSameBsts(arrayOne, arrayTwo, rootIdxOne, rootIdxTwo, minVal, maxVal) {
	if (arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false;

	const leftRootIdxOne = getIdxOfFirstSmaller(arrayOne, rootIdxOne, minVal);
	const leftRootIdxTwo = getIdxOfFirstSmaller(arrayTwo, rootIdxTwo, minVal);
	const rightRootIdxOne = getIdxOfFirstBiggerOrEqual(arrayOne, rootIdxOne, maxVal);
	const rightRootIdxTwo = getIdxOfFirstBiggerOrEqual(arrayTwo, rootIdxTwo, maxVal);

	const currentValue = arrayOne[rootIdxOne];
	const leftAreSame = areSameBsts(
		arrayOne,
		arrayTwo,
		leftRootIdxOne,
		leftRootIdxTwo,
		minVal,
		currentValue
	);
	const rightAreSame = areSameBsts(
		arrayOne,
		arrayTwo,
		rightRootIdxOne,
		rightRootIdxTwo,
		currentValue,
		maxVal
	);

	return leftAreSame && rightAreSame;
}

function getIdxOfFirstSmaller(array, startingIdx, minVal) {
	// Find the index of the first smaller value after the starting index. Make sure that this value is greater than or equal to the minVal, which is the value of the previous parent node in the BST. If it isn't, then that value is located in the left subtree of the previous parent node.
	for (let i = startingIdx + 1; i < array.length; i++) {
		if (array[i] < array[startingIdx] && array[i] >= minVal) return i;
	}
	return -1;
}

function getIdxOfFirstBiggerOrEqual(array, startingIdx, maxVal) {
	// Find the index of the first bigger/equal value after the starting index. Make sure that this value is smaller than maxVal, which is the value of the previous parent node in the BST. If it isn't, then that value is located in the right subtree of the previous parent node.
	for (let i = startingIdx + 1; i < array.length; i++) {
		if (array[i] >= array[startingIdx] && array[i] < maxVal) return i;
	}
	return -1;
}
