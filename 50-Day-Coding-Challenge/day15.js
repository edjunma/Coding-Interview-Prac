// Day 15 JavaScript Coding Challenge
// Create a function that will find the nth Fibonacci number using recursion
// Reminder: F(0) = 0, F(1) = 1, F(n) = F(n - 1) + F(n - 2)

function findFibonacci(n) {
	if (n === 0) return 0;

	if (n === 1) return 1;

	return findFibonacci(n - 1) + findFibonacci(n - 2);
}

let n = findFibonacci(10);
println(n);
