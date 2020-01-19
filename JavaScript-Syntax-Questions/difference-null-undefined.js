let primitiveTypes = ['string', 'number', 'null', 'undefined', 'boolean', 'symbol', 'bigint'];

console.log(!!null); //logs false
console.log(!!undefined); //logs false

console.log(Boolean(null)); //logs false
console.log(Boolean(undefined)); //logs false

// Undefined is a default value of a variable that has not been assigned a specific value.
let _thisIsUndefined;
const doNothing = () => {};
const someObj = {
	a: 'ay',
	b: 'bee',
	c: 'si'
};

console.log(_thisIsUndefined); //logs undefined
console.log(doNothing()); //logs undefined
console.log(someObj['d']); //logs undefined

// Null is a value that represent no value. Null is value that has been explicity defined to a variable.

fs.readFile('path/to/file', (e, data) => {
	console.log(e); //it logs null when no error occurred
	if (e) {
		console.log(e);
	}
	console.log(data);
});

// When comparing null and undefined we get true when using "==" and false when using "==="
console.log(null == undefined); // logs true
console.log(null === undefined); // logs false
