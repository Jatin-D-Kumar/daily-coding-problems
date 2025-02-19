
function climbStairs(n) {
    if (n <= 2) {
        return n; // If there are 1 or 2 steps, return n directly
    }

    let dp = new Array(n + 1);
    dp[0] = 1; // Base case: 1 way to stay at the ground (0 steps)
    dp[1] = 1; // Base case: 1 way to climb 