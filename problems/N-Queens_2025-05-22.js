
function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isSafe = (row, col) => {
        // Check the column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return f