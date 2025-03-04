
function countSquareSubmatrices(matrix) {
    if (!matrix || matrix.length === 0) {
        return 0;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    let count = 0;
    
    // Create a DP table with the same dimensions as the matrix
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    
    // Fill the DP table
    for (l