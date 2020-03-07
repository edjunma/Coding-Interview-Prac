// JavaScript Solution #1
// O(nm*min(n, m)) time | O(nm*min(n, m)) space

function longestCommonSubsequence(str1, str2) {
	const lcs = [];
	for (let i = 0; i < str2.length; i++) {
		const row = new Array(str1.length + 1).fill([]);
		lcs.push(row);
	}
	for (let i = 1; i < str2.length + 1; i++) {
		for (let j = 1; j < str1.length + 1; j++) {
			if (str2[i - 1] === str1[j - 1]) {
				lcs[i][j] = lcs[i - 1][j - 1].concat(str2[i - 1]);
			} else {
				lcs[i][j] = lcs[i - 1][j].length > lcs[i][j - 1].length ? lcs[i - 1][j] : lcs[i][j - 1];
			}
		}
	}
	return lcs[str2.length][str1.length];
}

// JavaScript Solution #2
// O(nm*min(n, m)) time | O((min(n, m))^2) space

function longestCommonSubsequence(str1, str2) {
	const small = str1.length < str2.length ? str1 : str2;
	const big = str1.length >= str2.length ? str1 : str2;
	const evenLcs = new Array(small.length + 1).fill([]);
	const oddLcs = new Array(small.length + 1).fill([]);
	for (let i = 1; i < big.length; i++) {
		let currentLcs, previousLcs;
		if (i % 2 === 1) {
			currentLcs = oddLcs;
			previousLcs = evenLcs;
		} else {
			currentLcs = evenLcs;
			previousLcs = oddLcs;
		}
		for (let j = 1; j < small.length + 1; j++) {
			if (big[i - 1] === small[j - 1]) {
				currentLcs[j] = previousLcs[j - 1].concat(big[i - 1]);
			} else {
				currentLcs[j] =
					previousLcs[j].length > currentLcs[j - 1].length ? previousLcs[j] : currentLcs[j - 1];
			}
		}
	}
	return big.length % 2 === 0 ? evenLcs[small.length] : oddLcs[small.length];
}
