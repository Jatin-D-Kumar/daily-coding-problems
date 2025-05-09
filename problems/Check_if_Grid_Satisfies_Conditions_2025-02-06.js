
function checkGrid(grid) {
    const n = grid.length;

    // Check each row
    for (let i = 0; i < n; i++) {
        const rowSet = new Set();
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < 1 || grid[i][j] > n || rowSet.has(grid[i][j])) {
                return false; // Invalid value or duplicate in row
            }
            rowSet.add(grid[i][j]);
        }
    }

    // Check each column
    for (let j = 0; j < n; j++) {
        const colSet = new Set();
        for (let i = 0; i < n; i++) {
            if (grid[i][j] < 1 || grid[i][j] > n || colSet.has(grid[i][j])) {
                return false; // Invalid value or duplicate in column
            }
            colSet.add(grid[i][j]);
        }
    }

    return true; // All conditions satisfied
}

// Example usage:
const grid = [
    [1, 2, 3],
    [2, 3, 1],
    [3, 1, 2]
];

console.log(checkGrid(grid)); // Output: true
