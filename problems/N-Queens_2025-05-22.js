
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
            if (board[i][j] === 'Q') return false;
        }
        // Check the upper right diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    const backtrack = (row) => {
        if (row === n) {
            results.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q'; // Place the queen
                backtrack(row + 1); // Move to the next row
                board[row][col] = '.'; // Remove the queen (backtrack)
            }
        }
    };

