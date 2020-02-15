// JavaScript Solution
// O(n) time | O(1) space - where n is the length of the input array

function hasSingleCycle(array) {
	let numElementsVisited = 0;
	let currentIdx = 0;
	while (numElementsVisited < array.length) {
		if (numElementsVisited > 0 && currentIdx === 0) return false;
		numElementsVisited++;
		currentIdx = getNextIdx(currentIdx, array);
	}
	return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
	const jump = array[currentIdx];
	const nextIdx = (currentIdx + jump) % array.length;
	return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}