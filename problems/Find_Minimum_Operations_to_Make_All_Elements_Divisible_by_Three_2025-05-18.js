
function minOperationsToMakeDivisibleByThree(arr) {
    let totalOperations = 0;

    for (let num of arr) {
        const remainder = num % 3;

        if (remainder === 1) {
            // Minimum operations to make it divisible by 3
            totalOperations += 1; // Decrement by 1
        } else if (remainder === 2) {
            // Minimum operations to make it divisible by 3
            totalOperations += 1; // Increment by 1
        }
        // If remainder is 0, do nothing
    }

    return totalOperations;
}

// Example usage:
const arr = [4, 5, 6, 7, 8];
console.log(minOperationsToMakeDivisibleByThree(arr)); // Output: 4
