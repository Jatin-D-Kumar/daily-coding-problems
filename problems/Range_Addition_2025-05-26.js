
function getModifiedArray(length, updates) {
    const nums = new Array(length).fill(0); // Initialize the array with zeros

    // Apply the range update logic using the difference array concept
    for (const [startIndex, endIndex, increment] of updates) {
        nums[startIndex] += increment; // Start the increment at startIndex
        if (endIndex + 1 < length) {
            nums[endIndex + 1] -= increment; // Cancel the increment after endIndex
        }
    }

    // Now calculate the prefix sum to get the final values in the array
    for (let i = 1; i < length; i++) {
        nums[i] += nums[i - 1]; // Cumulatively add the values
    }

    return nums; // Return the modified array
}

// Example usage
const length = 5;
const updates = [
    [1, 3, 2],
    [2, 4, 3],
    [0, 2, -2]
];

c