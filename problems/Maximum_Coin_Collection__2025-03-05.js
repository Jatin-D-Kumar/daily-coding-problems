
function maxCoinCollection(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Create a DP array to store maximum coins collected
    const dp = Arr