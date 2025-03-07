
function smallestSubarrays(arr) {
    const n = arr.length;
    const result = new Array(n);
    
    // Step 1: Calculate the maximum bitwise OR of the en