// Day 30 Coding Challenge
// Create a function that will add two indefinite size numbers.
// Requirements: Only positive numbers will be used and will be provided to the function as strings. The result should be also returned as a string.

let n1 = '2909034221912398942349';
let n2 = '1290923909029309499';
let sum = add(n1, n2);

println(n1, '\n', n2, '\n', sum);

function add(sNumber1, sNumber2) {
	let s = '';
	let carry = 0;
	let maxSize = Math.max(sNumber1.length, sNumber2.length);

	for (let i = 0; i < maxSize; i++) {
		let digit1 = digitFromRight(sNumber1, i);
		let digit2 = digitFromRight(sNumber2, i);

		let sum = digit1 + digit2 + carry;
		let digitSum = sum % 10;
		carry = sum >= 10 ? 1 : 0;
		s = digitSum.toString() + s;
	}

	if (carry > 0) {
		s = carry + s;
	}
	return s;
}

function digitFromRight(s, digitNum) {
	if (digitNum >= s.length) return 0;

	let char = s[s.length - 1 - digitNum];
	return parseInt(char);
}

// Challenge #30B
// Create a function that will add two indefinite size numbers. Only positive numbers will be used and will be provided to the function as strings. The result should also be returned as a string.

let n1 = '2909034221912398942349';
let n2 = '1290923909029309499';
let sum = add(n1, n2);

println(n1);
println(n2);
println(sum);

function add(sNumber1, sNumber2) {
	let maxSize = Math.max(sNumber1.length, sNumber2.length);

	let s1 = sNumber1.padStart(maxSize, '0');
	let s2 = sNumber2.padStart(maxSize, '0');

	let s = '';
	let carry = 0;

	for (let i = maxSize - 1; i >= 0; i--) {
		let digit1 = parseInt(s1[i]);
		let digit2 = parseInt(s2[i]);

		let sum = digit1 + digit2 + carry;
		let digitSum = sum % 10;
		carry = sum >= 10 ? 1 : 0;

		s = digitSum.toString() + s;
	}

	if (carry > 0) {
		s = carry + s;
	}
	return s;
}
