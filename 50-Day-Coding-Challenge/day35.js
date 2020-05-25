// Day 35 Coding Challenge
// Create a function to convert a CSV text to a "bi-dimensional" array

function csvToArray(data) {
	let arLines = data.split('\n');

	for (let i = 0; i < arLines.length; i++) {
		let arLine = arLines[i].split(';');
		arLines[i] = arLine;
	}
	return arLines;
}

var data =
	'John;Smith;954-000-0000\n' + 'Mich;Tiger;305-000-0000\n' + 'Monique;Vasquez;103-000-0000';

var ar = csvToArray(data);
println(JSON.stringify(ar));
