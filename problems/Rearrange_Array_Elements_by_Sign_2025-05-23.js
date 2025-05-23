
function rearrangeArray(arr) {
    const positiveArray = [];
    const negativeArray = [];

    // Loop through the array and separate positive and negative numbers
    for (let num of arr) {
        if (num >= 0) {
            positiveArray.push(num); // If the number is positive, add to positive array
        } else {
            negativeArray.push(num); // If the number is negative, add to negative array
        }
    }

    // Combine the positive and negative arrays
    return [...positiveArray, ...negativeArray];
}

// Example usage:
const inputArray = [1, -2, 3, -4, 5, -6];
const rearrangedArray = rearrangeArray(inputArray);
console.log(rearrangedArray); // Output: [1, 3, 5, -2, -4, -6]
