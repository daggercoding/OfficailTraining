// Number of rows
let numRows = 3;

// Loop through each row
for (let i = 0; i < numRows; i++) {
    // Initialize a counter for spaces before the number
    let spaceCount = numRows - i - 1;
    
    // Loop through each column
    for (let j = 0; j <= i; j++) {
        // Print leading spaces
        for (let k = 0; k < spaceCount; k++) {
            process.stdout.write(' ');
        }
        
        // Print the number
        process.stdout.write((j + 1).toString());
        
        // Reset the space count for the next row
        spaceCount--;
    }
    
    // Move to the next line
    console.log();
}
	