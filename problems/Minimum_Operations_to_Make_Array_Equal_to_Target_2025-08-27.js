
function minOperations(arr, target) {
    let operations = 0;

    for (let i = 0; i < arr.length; i++) {
        operations += Math.abs(arr[i] - target);
    }

    return operations;
}

// Example usage:
const arr = [1, 2, 3];
const target = 2;
console.log(minOpe