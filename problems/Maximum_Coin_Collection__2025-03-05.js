
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
    for (let i = 1; i < rows; 