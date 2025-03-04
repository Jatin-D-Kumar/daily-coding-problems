
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
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 1) {
                // If we're in the first row or first column, just copy the value
                if (r === 0 || c === 0) {
                    dp[r][c] = 1;
                } else {
                    // Update the DP value based on the minimum of the neighboring cells
   