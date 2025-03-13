
function findKthPositive(arr, k) {
    let missingCount = 0;
    let current = 1; // Start checking from the first positive integer
    let arrIndex = 0; // Index for the array

    while (missingCount < k) {
        if (arrIndex < arr.length && arr[arrIndex] === current) {
            // If current is found in the array, move to next element in array
            arrIndex++;
        } else {
            // If current is missing, increase the missing count
            missingCount++;
        }
        current++; // Move to the next integer
    }

    // The last "current" increments one extra time when missingCount reaches k, so return current - 1
    return current - 1;
}

// Example usage:
const arr = [2, 3, 4, 7, 11];
const k = 5;
console.log(findKthPositive(arr, k)); // Output: 9
