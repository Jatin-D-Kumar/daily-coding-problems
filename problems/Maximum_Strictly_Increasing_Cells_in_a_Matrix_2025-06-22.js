
function maxIncreasingCells(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(-1));
    let maxLength = 0;

    const directions = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0] // up
    ];

    const isInBounds = (x, y) => x >= 0 && x < rows && y >= 0 && y < cols;

    const dfs =