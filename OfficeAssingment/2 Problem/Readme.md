Problem 2: Largest Palindrome Product
Objective:Find the largest palindrome made from the product of two 3-digit numbers.
How to do it:
1.Generate Products: Create a nested loop to iterate through all possible pairs of 3-digit numbers, 
multiplying them to get products.
for (let i = 100; i < 1000; i++) {
 for (let j = 100; j < 1000; j++) {
 const product = i * j;
 // Check if product is a palindrome
 // Update the largest palindrome found
 }
}
2.Check Palindrome: For each product, check if it is a palindrome. Implement a function to determine 
if a number reads the same backward as forward.
3.Track Largest Palindrome: Keep track of the largest palindrome found during the iteration.
