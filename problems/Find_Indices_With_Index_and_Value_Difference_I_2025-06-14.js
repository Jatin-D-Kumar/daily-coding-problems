
function findIndicesWithDifference(arr, k) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(i - arr[i]) === k) {
            result.push(i);
        }
    }
    
    return r