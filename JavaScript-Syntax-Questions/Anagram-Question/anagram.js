// Given two strings, return true if they are anagrams of each other. Remember an anagram is a word, phrase, or name formed by rearranging the letters of another, for example cinema can be formed to iceman.

function anagram(str1, str2) {
	// replace all whitespace in string, split into the arrays, sort and rejoin as strings
	sorted1 = str1
		.toLowerCase()
		.replace(/\s+/g, '')
		.split('')
		.sort()
		.join();
	sorted2 = str2
		.toLowerCase()
		.replace(/\s+/g, '')
		.split('')
		.sort()
		.join();

	return sorted1 === sorted2;
}
