
function maxLengthValidSubsequence(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    const n = arr.length;
    const dp = new Array(n).fill(1); // Initialize dp array with 1

    let maxLength = 1; // At least one element can be a valid subsequence

    // Iterate through the array to fill the dp array
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            // Check if arr[j] can be part of the subsequence ending at arr[i]
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
}

// Example usage:
const arr = 