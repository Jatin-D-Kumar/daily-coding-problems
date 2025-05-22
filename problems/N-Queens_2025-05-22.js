
function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isSafe = (row, col) => {
        // Check the column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        // Check the upper left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if 