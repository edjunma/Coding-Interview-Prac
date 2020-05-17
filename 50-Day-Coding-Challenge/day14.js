// Day 14 JavaScript Coding Challenge
// Print the first 10 Fibonacci numbers without using recursion
// Reminder: F(0) = 0, F(1) = 1, F(n) = F(n - 1) + F(n - 2)

let f0 = 0;
println(f0);

let f1 = 1;
println(f1);

for(let i = 2; i < 10; i++) {
  let fib = f1 + f0;
  println(fib);

  f0 = f1;
  f1 = fib;
}