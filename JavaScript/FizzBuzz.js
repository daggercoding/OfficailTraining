// Write a function fizzBuzz(n) that takes a number n as input and returns an array containing the numbers from 1 to n. For multiples of 3, replace the number with "Fizz". For multiples of 5, replace the number with "Buzz". For multiples of both 3 and 5, replace the number with "FizzBuzz".

function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        result.push(output || i);
    }
    return result;
}

// Test cases
console.log(fizzBuzz(5)); // Output: [1, 2, "Fizz", 4, "Buzz"]
console.log(fizzBuzz(15)); // Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
