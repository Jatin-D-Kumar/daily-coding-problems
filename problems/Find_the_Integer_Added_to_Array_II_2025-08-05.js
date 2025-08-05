
function findAddedInteger(arr, addedInt) {
    let total = 0;

    // Calculate the total of numbers in original array
    for (let num of arr) {
        total ^= num; // XOR operation
    }

    // Include the added integer in the total
    total ^= addedInt;

    return total;
}

// Example usage:
const originalArray = [1, 2,