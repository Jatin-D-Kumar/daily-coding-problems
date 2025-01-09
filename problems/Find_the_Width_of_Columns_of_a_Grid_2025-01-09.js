
function findColumnWidths(grid) {
    // Check if the grid is empty
    if (grid.length === 0) return [];

    // Initialize an array to hold the maximum widths of each column
    const columnWidths = [];

    // Iterate through each row in the grid
    for (const row of grid) {
        // Iterate through each column in the row
        for (let col = 0; col < row.length; col++) {
            // Get the string representation of the current cell
            const cellValue = String(row[col]);
       