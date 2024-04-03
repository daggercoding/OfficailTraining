Problem 1: Longest Collatz Sequence
Problem Explanation: The Collatz sequence is defined for the set of positive integers:
•If the number is even, divide it by 2.
•If the number is odd, triple it and add 1. The sequence ends when it reaches 1. Find the starting 
number under 1 million that produces the longest chain.
Algorithm:
1.Start from 1 and iterate up to 1 million.
2.For each number, calculate its Collatz sequence length until it reaches 1.
3.Track the number that produces the longest chain.
 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1




 