// JavaScript Solution

class AncestralTree {
	constructor(name) {
		this.name = name;
		this.ancestor = null;
	}
}

// O(d) time | O(1) space - where d is the depth (height) of the ancestral tree

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	const depthOne = getDescendantDepth(descendantOne, topAncestor);
	const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
	if (depthOne > depthTwo) {
		return backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo);
	} else {
		return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne);
	}
}
