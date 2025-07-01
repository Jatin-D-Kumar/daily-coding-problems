
function largestSumAfterKNegations(A, K) {
    // Sort the array in ascending order
    A.sort((a, b) => a - b);
    
    // Negate the smallest K elements (or all if K exceeds the size)
    for (let i = 0; i < A.length && K > 0; i++) {
        if