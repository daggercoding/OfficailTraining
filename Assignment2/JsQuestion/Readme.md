Assignment -II
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
Problem 2: Longest Common Subsequence
Problem Explanation: Given two strings, find the length of their longest common 
subsequence
Algorithm:
1.Use dynamic programming to build a 2D array to store the length of the longest common 
subsequence for each prefix of the strings.
2.Iterate through the characters of both strings and fill the array based on the following rules:
• If characters match, increment the length by 1 from the diagonal element.
• If characters don t match, take the maximum of the element above and the element to the ’
left.
1.The value in the bottom-right corner of the array will be the length of the longest common 
subsequence.
String 1: "ABCBDAB"
String 2: "BDCAB"
The longest common subsequence between the two strings is "BCAB", and its 
length is 4.
String 1: "AGGTAB"
String 2: "GXTXAYB"
The longest common subsequence between the two strings is "GTAB", and its 
length is 4.
Example:
For strings "ABCDGH" and "AEDFHR", the longest common subsequence is "ADH" 
or "ADHR", and the length of this subsequence is 3.
Problem 3: Lattice Paths
Problem Explanation: Starting in the top left corner of a grid, and only being 
able to move right or down, determine how many routes exist to the bottom right 
corner of a 20x20 grid.
Algorithm:
1.Use dynamic programming to build a 2D array to store the number of routes for each position in 
the grid.
2.Initialize the edges of the grid with 1, as there s only one route to reach them. ’
3.Iterate through the interior points of the grid and fill the array by summing the number of routes 
from the top and the left.
4.The value in the bottom-right corner of the array will represent the total number of routes.
Example: For a 3x3 grid, the paths from the top left corner (0,0) to the bottom 
right corner (2,2) are as follows: Right, Right, Down, Down Right, Down, Right, 
Down Right, Down, Down, Right Down, Right, Right, Down Down, Right, Down, Right 
Down, Down, Right, Right
NOTE: Make these layouts using Html5 and Css3