// Day 48 Coding Challenge
// Create a function to return the longest word(s) in a string

var text = 'Create a function to return the longest word(s) in a sentence.';
println(getLongestWords(text));

function getLongestWords(text) {
	let words = getWords(text);
	let maxSize = 0;
	let maxPositions = [];

	for (let i = 0; i < words.length; i++) {
		let currWordSize = words[i].length;

		if (currWordSize > maxSize) {
			maxSize = currWordSize;
			maxPositions = [i];
		} else if (currWordSize === maxSize) {
			maxPositions.push(i);
		}
	}
	return getElements(words, maxPositions);
}

// Get only the elements from specified positions from the array

function getElements(ar, arPositions) {
	let arNew = [];

	for (let pos of arPositions) {
		arNew.push(ar[pos]);
	}
	return arNew;
}

// Returns an array with the words from specified text

function getWords(text) {
	let startWord = -1;
	let ar = [];
}

function isSeparator(c) {
	var separators = [' ', '\t', '\n', '\r', ',', ';', '.', '!', '?'];
	return separators.includes(c);
}
