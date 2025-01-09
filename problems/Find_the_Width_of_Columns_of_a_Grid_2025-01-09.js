
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
            // Update the column width if necessary
            if (columnWidths[col] === undefined) {
                columnWidths[col] = cellValue.length;
            } else {
                columnWidths[col] = Math.max(columnWidths[col], cellValue.length);
            }
        }
    }

    return columnWidths;
}

// Example usage:
const grid = [
    [1, 'apple', 12345],
    [22, 'banana', 678],
    [333, 'cherry', 9]
];

const widths = findColumnWidths(grid);
console.log(widths); // Output: [3, 6, 5]
