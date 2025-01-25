
function isMagicSquare(square) {
    const n = square.length;
    const magicSum = (n * (n * n + 1)) / 2; // The magic constant for n x n magic square

    // Check rows and columns
    for (let i = 0; i < n; i++) {
        let rowSum = 0;
        let colSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += square[i][j];
            colSum += square[j][i];
        }
        if (rowSum !== magicSum || colSum !== magicSum) {
            return false;
        }
    }

    // Check diagonals
    let diag1Sum = 0;
    let diag2Sum = 0;
    for (let i = 0; i < n; i++) {
        diag1Sum += square[i][i];
        diag2Sum += square[i][n - 1 - i];
    }

    return diag1Sum === magicSum && diag2Sum === magicSum;
}

function largestMagicSquare(matrix) {
    const rows = matrix.length;
    if (rows === 0) return 0;
    const cols = matrix[0].length;
    let maxSize = 0;

    for (let size = 1; size <= Math.min(rows, cols); size++) {
        for (let i = 0; i <= rows - size; i++) {
            for (let j = 0; j <= cols - size; j++) {
      