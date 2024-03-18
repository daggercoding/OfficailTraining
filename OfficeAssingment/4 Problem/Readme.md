Problem 4: Highly Divisible Triangular Number
Objective:Find the first triangular number with over 500 divisors.
How to do it:
1.Generate Triangular Numbers: Implement a function to generate triangular numbers (the sum 
of natural numbers up to a certain point). n can be 1000
 function generateTriangularNumber(n) {
 return (n * (n + 1)) / 2;
 }

2.Count Divisors: Create a function to count the divisors of a given number. This might involve 
prime factorization and counting combinations.
3.Iterate and Check: Iterate through triangular numbers, calculate the number of divisors for each, 
and check if it exceeds 500.
 4.Optimize Divisor Counting: Optimize the divisor counting function for 
 efficiency to handle a large number of divisors