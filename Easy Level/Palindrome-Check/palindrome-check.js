// My solution in JavaScript
// O(n^2) time | O(n) space

function isPalindrome(string) {
	let reversedString = '';
	for (let i = string.length - 1; i >= 0; i--) {
		reversedString += string[i];
	}
	return string === reversedString;
}

// Second solution
// O(n) time | O(n) space
function isPalindrome(string) {
	const reversedChars = [];
	for (let i = string.length - 1; i >= 0; i--) {
		reversedChars.push(string[i]);
	}
	return string === reversedChars.join('');
}

// Third solution
// O(n) time | O(n) space
function isPalindrome(string, i = 0) {
	const j = string.length - 1 - i;
	return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}

// Fourth Solution
// O(n) time | O(n) space
function isPalindrome(string) {
	let leftIdx = 0;
	let rightIdx = string.length - 1;
	while (leftIdx < rightIdx) {
		if (string[leftIdx] !== string[rightIdx]) return false;
		leftIdx++;
		rightIdx--;
	}
	return true;
}
