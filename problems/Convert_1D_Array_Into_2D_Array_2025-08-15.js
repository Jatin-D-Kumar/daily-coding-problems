
function convert1DTo2D(arr, rows, cols) {
    // Check if the total number of elements matches
    if (arr.length !== rows * cols) {
        return [];
    }

    const result = [];
    for (let i = 0;