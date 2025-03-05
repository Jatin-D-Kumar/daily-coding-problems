
function maxCoinCollection(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Create a DP array to store maximum coins collected
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Initialize the starting point
    dp[0][0] = grid[0][0];

    // Fill the first row (can only come from the left)
    for (let j = 1; j < cols; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    // Fill the first column (can only come from above)
    for (let i = 1; i < rows; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    // Fill the rest of the dp array
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    // The maximum coins collected would be at the bottom-right corner
    return dp[rows - 1][cols - 1];
}

// Example usage:
const grid = [
    [0, 2, 1],
    [1, 3, 1],
    [2, 1, 0],
];

console.log(maxCoinCollection(grid)); // Output: 7 (0 → 2 → 3 → 1 → 0)
