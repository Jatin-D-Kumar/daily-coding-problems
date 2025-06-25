
function champagneTower(poured, query_row, query_glass) {
    // Create a 2D array representing the tower, where each row corresponds to a level in the tower.
    const tower = Array.from({ length: query_row + 1 }, () => Array(query_row + 1).fill(0));
    
    // Pour the 