
function isMagicSquare(square) {
    const n = square.length;
    const magicSum = (n * (n * n + 1)) / 2; // The magic constant for n x n magic square

    // Check rows and columns
    for (let i = 0; i < n; i++) {
        let rowSum = 0;
        let colSum = 0;
