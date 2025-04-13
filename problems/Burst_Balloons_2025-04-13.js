
function maxCoins(nums) {
    // Add 1s to the beginning and end of the array
    const balloons = [1, ...nums, 1];
    const n = balloons.length;
    
    // Create a DP table
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    
    // Iterate over the length of the subarray
    for (let length = 2; length < n; length++) {
        for (let left = 0; left < n - length; left++) {
            const right = left + length;
            // Try bursting each balloon in the range [left, right]
            for (let i = left + 1; i < right; i++) {
                // Calculate coins for bursting balloon i last
                const coins = balloons[left] * balloons[i] * balloons[right] + dp[left][i] + dp[i][right];
                dp[left][right] = Math.max(dp[left][right], coins);
            }
        }
    }
    
    // The result is in dp[0][n-1]
    return dp[0][n - 1];
}

// Example usage:
const nums = [3, 1, 5, 8];
console.log(maxCoins(nums)); // Output: 167
