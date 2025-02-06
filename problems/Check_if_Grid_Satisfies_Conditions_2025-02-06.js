
function checkGrid(grid) {
    const n = grid.length;

    // Check each row
    for (let i = 0; i < n; i++) {
        const rowSet = new Set();
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < 1 || grid[i][j] > n || rowSet.has(grid[i][j])) {
                return false; // Invalid value or duplicate in row
            }
            rowSet.add(gr