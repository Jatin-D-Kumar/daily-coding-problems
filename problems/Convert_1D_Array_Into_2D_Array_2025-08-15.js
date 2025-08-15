
function convert1DTo2D(arr, rows, cols) {
    // Check if the total number of elements matches
    if (arr.length !== rows * cols) {
        return [];
    }

    const result = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(arr[i * cols + j]);
        }
        result.push(row);
    }
    return result;
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6];
const numberOfRows = 2;
const numberOfColumns = 3;

const outputArray = convert1DTo2D(inputArray, numberOfRows, numberOfColumns);
console.log(outputArray);
