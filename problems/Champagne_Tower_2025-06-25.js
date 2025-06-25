
function champagneTower(poured, query_row, query_glass) {
    // Create a 2D array representing the tower, where each row corresponds to a level in the tower.
    const tower = Array.from({ length: query_row + 1 }, () => Array(query_row + 1).fill(0));
    
    // Pour the champagne into the top glass.
    tower[0][0] = poured;

    // Iterate through each level of the tower up to the query_row.
    for (let row = 0; row <= query_row; row++) {
        for (let glass = 0; glass <= row; glass++) {
            // If there is more than 1 unit of champagne in the current glass:
            if (tower[row][glass] > 1) {
                // Calculate the excess champagne that overflows.
                const overflow = tower[row][glass] - 1;
                tower[row][glass] = 1; // Only 1 unit can be held in the glass.

                // Distribute the overflow to the glasses below.
                tower[row + 1][glass] += overflow / 2; // Left glass below
                tower[row + 1][glass + 1] += overflow / 2; // Right glass below
            }
        }
    }

    // The result for