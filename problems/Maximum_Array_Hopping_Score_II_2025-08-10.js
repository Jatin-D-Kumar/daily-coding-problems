
function maxHoppingScore(arr) {
    const n = arr.length;
    if (n === 0) return 0;
    if (n === 1) return arr[0];
    if (n === 2) return Math.max(arr[0], arr[1]);

    // Create a dp array to store the maximum score at each index
    const dp = new Array(n);
    dp[0] = arr[0]; // Maximum score at the first index
    dp[1] = Math.max(arr[0], arr[1]); // Maximum score at the second index

    for (let i = 2; i < n; i++) {
        // The maximum score at index i can be obtained by either:
        // 1. Taking the current score and adding it to the maximum score from two indices back
        // 2. Taking the maximum score from the previous index (skipping the current score)
        dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2]);
    }

    // The last element in dp will contain the maximum score we can achieve
    return dp[n - 1];
}

// Example usage:
const arr = [3, 2, 5, 10, 7];
console.log(maxHoppingScore(arr)); // Output: 15
