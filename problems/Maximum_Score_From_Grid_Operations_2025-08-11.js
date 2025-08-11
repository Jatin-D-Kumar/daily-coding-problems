
function maxScore(grid) {
    let m = grid.length;       // number of rows
    let n = grid[0].length;    // number of columns
    let score = 0;

    // This approach assumes we can choose the maximum from each row 
    // and add it to the score, typical interpretation of maximizing grid operations.
    for (let i = 0; i < m; i++) {
        // Find the maximum value in each row
        let maxInRow = Math.max(...grid[i]);
        score += maxInRow;