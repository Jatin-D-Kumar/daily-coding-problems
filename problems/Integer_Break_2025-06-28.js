
function integerBreak(n) {
    // Create an array to store the maximum product for values 1 to n
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1; // Base case: the maximum product for 1 is trivial

    // Fill the dp array
    for (let i = 2; i <= n; i++) {
        for (let