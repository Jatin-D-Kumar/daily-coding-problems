
function applyTransform(arr, transform) {
    return arr.map(transform);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const transformFunction = (num) => num * 2;

const transformedArray = applyTransform(numbers, transformFunction);
console.log(transformedArray); // Output: [2, 4, 6, 8, 10]
