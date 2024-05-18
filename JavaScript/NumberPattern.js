// Define the input string
let str = "-32 * -1";

// Outer loop to iterate over each character in the string
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    // Check if the current character is a digit
    if (!isNaN(char)) {
        // Convert the character to a number
        let num = parseInt(char);

        // Perform the multiplication operation
        let result = num * -1;

        // Print the result
        console.log(result);
    } else {
        // If the character is not a digit, print it as is
        console.log(char);
    }
}
