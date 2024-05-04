function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};

    arr.forEach(function(element) {
        if (seen[element]) {
            if (duplicates.indexOf(element) === -1) {
                duplicates.push(element);
            }
        } else {
            seen[element] = true;
        }
    });

    return duplicates;
}

// Test cases
console.log(findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: []
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 6, 4, 7])); // Output: [2, 4]
console.log(findDuplicates([1, 1, 2, 2, 3, 3])); // Output: [1, 2, 3]
