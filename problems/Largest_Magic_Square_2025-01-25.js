
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