
function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let rows = matrix.length;
    let cols = matrix[0].length;
    l