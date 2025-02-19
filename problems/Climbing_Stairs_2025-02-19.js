
function climbStairs(n) {
    if (n <= 2) {
        return n; // If there are 1 or 2 steps, return n directly
    }

    let dp = new Array(n + 1);
    dp[0] = 1; // Base case: 1 way to stay at the ground (0 steps)
    dp[1] = 1; // Base case: 1 way to climb 1 step

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // The number of ways to reach step i
    }

    return dp[n]; // The number of ways to reach the top (n steps)
}

// Example usage:
console.log(climbStairs(5)); // Output: 8
