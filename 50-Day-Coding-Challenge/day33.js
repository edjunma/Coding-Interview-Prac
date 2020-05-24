// Day 33 Coding Challenge
// Calculate the sums of numbers received in a comma delimited string

function sumCSV(s) {
	let ar = s.split(',');
	let sum = 0;

	for (let n of ar) {
		sum += parseFloat(n);
	}
	return sum;
}

println(sumCSV('1.5, 2.3, 3.1, 4, 5.5'));
