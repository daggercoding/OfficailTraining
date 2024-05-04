function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// Test cases
console.log(reverseWords("Hello World")); // Output: "World Hello"
console.log(reverseWords("JavaScript is awesome")); // Output: "awesome is JavaScript"
