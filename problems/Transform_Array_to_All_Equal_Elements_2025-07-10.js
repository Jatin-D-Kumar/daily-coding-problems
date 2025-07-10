
function minOperationsToEqual(arr) {
    const n = arr.length;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const target = Math.round(sum / n); // Calculate the target value (average)

    let operations = 0;

    // Calculate the total number of operations needed to make all elements equal to the target
    for (let i = 0; i < n; i++) {
        operations += Math.abs(arr[i] - target);
    }

    return operations;
}

// Example usage:
const arr = [1, 2, 3, 4];
const result = minOperationsToEqual(arr);
console.log(result); // Output: 2
