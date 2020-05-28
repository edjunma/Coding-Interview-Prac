// Challenge #51 - 52

// Challenge #51
// Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurences.

var ar = getCharFrequency('Find the frequency of characters inside a string');
println(JSON.stringify(ar));

function getCharFrequency(text) {
	let ar = [];

	for (let chr of text) {
		updateFrequency(ar, chr);
	}
	return ar;
}

function updateFrequency(ar, chr) {
	for (let el of ar) {
		if (el.chr === chr) {
			el.count++;
		}
	}
	ar.push({ chr: chr, count: 1 });
}

// Challenge #52
// Calculate Fibonacci(500) with high precision down to decimals.

println(fibonacci(500));

function fibonacci(n) {
	if (n === 0) {
		return '0';
	} else if (n === 1) {
		return '1';
	}

	let n1 = '0';
	let n2 = '1';

	for (let i = 2; i <= n; i++) {
		let sum = add(n1, n2);
		n1 = n2;
		n2 = sum;
	}
	return n2;
}

function add(sNumber1, sNumber2) {
	var maxSize = Math.max(sNumber1.length, sNumber2.length);

	var s1 = sNumber1.padStart(maxSize, '0');
	var s2 = sNumber2.padStart(maxSize, '0');

	var s = '';
	var carry = 0;

	for (let i = maxSize - 1; i >= 0; i--) {
		var digit1 = parseInt(s1[i]);
		var digit2 = parseInt(s2[i]);

		var sum = digit1 + digit2 + carry;
		var digitSum = sum % 10;
		carry = sum >= 10 ? 1 : 0;

		s = digitSum.toString() + s;
	}

	if (carry > 0) {
		s = carry + s;
	}
	return s;
}
