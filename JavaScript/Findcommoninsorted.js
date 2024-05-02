// Function to find the intersection of two arrays
function findIntersection(arr1, arr2) {
    let i = 0;
    let j = 0;
    const temp = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else {
            temp.push(arr1[i]);
            i++;
            j++;
        }
    }

    return temp;
}

function main() {
    const arr1 = [1, 5, 10, 20, 40, 80];
    const arr2 = [6, 7, 20, 80, 100];
    const arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

    // Find the intersection of arr1 and arr2
    const temp = findIntersection(arr1, arr2);

    // Find the intersection of temp and arr3 to get common elements
    const ans = findIntersection(temp, arr3);

    console.log("Common elements present in arrays are:");
    for (const element of ans) {
        console.log(element);
    }
}

// Call the main function to start the program
main();
