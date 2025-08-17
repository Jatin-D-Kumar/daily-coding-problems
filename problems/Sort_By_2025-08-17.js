
// Example array of objects
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 28 }
];

// Function to sort the array by a specific key
function sortBy(arr, key) {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1; // a comes before b
        }
        if (a[key] > b[key]) {
            return 1; // a comes after b
        }
        return 0; // a an