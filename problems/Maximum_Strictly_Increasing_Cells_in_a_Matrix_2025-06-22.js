
function maxIncreasingCells(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: