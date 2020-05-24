// Day 32 Coding Challenge
// Create a function that will capitalize the first letter of each word in a text

function capitalizeWords(text) {
	let text2 = '';

	for (let i = 0; i < text.length; i++) {
		let currentChar = text[i];
		var prevChar = i > 0 ? text[i - 1] : ' ';

		if (!isSeparator(currentChar) && isSeparator(prevChar)) {
			currentChar = currentChar.toUpperCase();
		}
		text2 += currentChar;
	}
	return text2;
}

function isSeparator(c) {
	var separators = [' ', '\t', '\n', '\r', ',', ';', '.', '!', '?'];
	return separators.includes(c);
}

print(ln(capitalizeWords('Capitalize these words!')));
