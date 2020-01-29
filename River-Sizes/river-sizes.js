// JavaScript Solution
// O(wh) time | O(wh) space

function riverSizes(maxtrix) {
	const sizes = [];
	const visited = matrix.map(row => row.map(value => false));
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (visited[i][j]) continue;
			traverseNode(i, j, matrix, visited, sizes);
		}
	}
	return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
	let currentRiverSize = 0;
}
