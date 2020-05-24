// Day 31 Coding Challenge
// Challenge #31A
// Create a function that will return the number of words in a text

function countWords(text) {
	let wasSeparator = true;
	let words = 0;

	for (var c of text) {
		if (isSeparator(c)) {
			wasSeparator = true;
			continue;
		}

		if (wasSeparator) {
			words++;
			wasSeparator = false;
		}
	}
	return words;
}

function isSeparator(c) {
	var separators = [' ', '\t', '\n', '\r', ',', ';', '.', '!', '?'];
	return separators.includes(c);
}

println(countWords(''));
println(countWords('               '));
println(countWords('JavaScript!'));
