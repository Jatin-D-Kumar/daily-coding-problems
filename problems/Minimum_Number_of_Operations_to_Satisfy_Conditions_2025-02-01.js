
function minOperations(arr) {
    // Calculate the average of the array
    const average = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    
    // Calculate the number of operations needed to make all elements equal to the average
    let operations = 0;
    for (let num of arr) {
        operations += Math.abs(num - average);
    }
    
    return operations;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(minOperations(arr)); // Output: 4
