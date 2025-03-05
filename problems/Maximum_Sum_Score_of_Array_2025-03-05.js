
function maxSumScore(arr) {
    if (arr.length === 0) {
        return 0; // No elements, no score
    }
    
    let maxSoFar = arr[0]; // This will hold the max sum found so far
    let maxEndingHere = arr[0]; // This holds the max sum of the subarray ending at the current position

    for (let i = 1; i < arr.length; i++) {
        // Calculate maxEndingHere: either start a new subarray at arr[i] or continue the existing one
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

        // Update maxSoFar if maxEndingHere is greater
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSumScore(array);
console.log(result); // Output: 6 (the maximum sum contiguous subarray is [4, -1, 2, 1])
