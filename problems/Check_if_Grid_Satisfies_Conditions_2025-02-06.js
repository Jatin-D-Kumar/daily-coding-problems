
function checkGrid(grid) {
    const n = grid.length;

    // Check each row
    for (let i = 0; i < n; i++) {
        const rowSet = new Set();
        for (let j = 0; j < n; j++) {
