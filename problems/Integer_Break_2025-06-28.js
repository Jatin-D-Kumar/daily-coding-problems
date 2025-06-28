
function integerBreak(n) {
    // Create an array to store the maximum product for values 1 to n
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1; // Base case: the maximum product for 1 is trivial

    // Fill the dp array
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            // Either we can use j and (i - j) or dp[j] and dp[i - j] for the maximum product
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }

    return dp[n];
}

// Example usage
console.log(integerBreak(10)); // Output: 36
