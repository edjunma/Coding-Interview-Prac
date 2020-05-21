// Day 23 JavaScript Coding Challenge
// Reverse a string

let s = reverseString('Reverse Me!');
println(s);

function reverseString(s) {
	let s2 = '';

	for (let i = s.length - 1; i >= 0; i--) {
		let char = s[i];
		s2 += char;
	}
	return s2;
}
