
function minSwaps(A, B) {
    const n = A.length;
    // Create an array to store the minimum swaps needed to make sequences increasing
    const dp = Array.from({ l