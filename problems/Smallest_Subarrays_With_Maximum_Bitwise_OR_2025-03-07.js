
function smallestSubarrays(arr) {
    const n = arr.length;
    const result = new Array(n);
    
    // Step 1: Calculate the maximum bitwise OR of the entire array
    const maxOr = arr.reduce((acc, curr) => acc | curr, 0);
    
    // Step 2: Find the smallest contiguous subarrays with max OR
    for (let i