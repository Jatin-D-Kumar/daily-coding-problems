
function minOperationsToMaximizeLastElement(arr, target) {
    const n = arr.length;
    if (n === 0 || arr[n - 1] >= target) {
        return 0; // No operations needed if the last element is already >= target
    }

    let operations = 0;
    let lastElement = arr[n - 1];

    // We will keep increasing the last element until it reaches the target
    while (lastElement < target) {
        // Increment the last element
        lastElement++;
        operations++;
    }

    return operations;
}

// Example usage:
const arr = [1, 2, 3, 4];
const target = 6;
const result = minOperationsToMaximizeLastElement(arr, target);
console.log(`Minimum operations required: ${result}`); // Output: 2
