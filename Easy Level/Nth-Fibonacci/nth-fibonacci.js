// My solution
// O(2^n) time | O(n) space

function getNthFib(n) {
	if (n === 2) {
		return 1;
	} else if (n === 1) {
		return 0;
	} else {
		return getNthFib(n - 1) + getNthFib(n - 2);
	}
}

// Memoization solution
// O(n) time | O(n) space
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
	if (n in memoize) {
		return memoize[n];
	} else {
		memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
		return memoize[n];
	}
}

// Most optimal solution
// O(n) time | O(n) space
function getNthFib(n) {
	const lastTwo = [0, 1];
	let counter = 3;
	while (counter <= n) {
		const nextFib = lastTwo[0] + lastTwo[1];
		lastTwo[0] = lastTwo[1];
		lastTwo[1] = nextFib;
		counter++;
	}
	return n > 1 ? lastTwo[1] : lastTwo[0];
}

// Leet Code solutions
// Iterative solution
// O(n) time | O(1) space

const fib = N => {
	let arr = [0, 1];

	for (let i = 2; i <= N; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}

	return arr[N];
};

// Dynamic Programming iterative solution with memoization from bottom-up
// O(n) time | O(1) space

const fib = N => {
	const memo = {};
	for (let i = 0; i <= N; i++) {
		if (i < 2) memo[i] = i;
		else memo[i] = memo[i - 2] + memo[i - 1];
	}
	return memo[N];
};
