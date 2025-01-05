
function maxLengthValidSubsequence(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    const n = arr.length;
    const dp = new Array(n).fill(1); // Initialize dp array with 1

    let maxLength = 1; // At least one element can be a valid subsequence

    // Iterate through the array to fill the dp array
    for (let i = 1; i < 