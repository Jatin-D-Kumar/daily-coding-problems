
const danfo = require("danfojs-node");

// Sample data
const data = {
    column1: [1, 2, 3],
    column2: ['A', 'B', 'C'],
    column3: [true, false, true]
};

// Create a DataFrame
const df = new danfo.DataFrame(data);

// Get the size of the DataFrame
const size = {
    rows: df.shape[0], // Number of rows
    columns: df.shape