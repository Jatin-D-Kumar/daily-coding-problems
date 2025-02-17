
function getStrongest(arr, k) {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);
    
    // Step 2: Find the median
    const n = arr.length;
    c