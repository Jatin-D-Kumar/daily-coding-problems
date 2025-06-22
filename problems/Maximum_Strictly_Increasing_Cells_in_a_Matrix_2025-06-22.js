
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

    const dfs = (r, c) => {
        if (dp[r][c] !== -1) {
            return dp[r][c];
        }
        
        let maxPath = 1; // the cell itself
        
        for (const [dx, dy] of directions) {
            const newRow = r + dx;
            const newCol = c + dy;
            if (isInBounds(newRow, newCol) && matrix[newRow][newCol] > matrix[r][c]) {
                maxPath = Math.max(maxPath, 1 + dfs(newRow, newCol));
            }
        }
        
        return dp[r][c] = maxPath;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; 