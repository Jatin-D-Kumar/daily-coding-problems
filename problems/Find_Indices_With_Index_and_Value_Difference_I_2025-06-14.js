
function findIndicesWithDifference(arr, k) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(i - arr[i]) === k) {
            result.push(i);
        }
    }
    
    return result;
}

// Example usage:
const arr = [0, 2, 1, 3, 4];
const k = 1;
const indices = findIndicesWithDifference(arr, k);
console.log(indices); // Output: [1, 3]
