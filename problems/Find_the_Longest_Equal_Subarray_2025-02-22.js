
function findLongestEqualSubarray(arr) {
    if (arr.length === 0) return 0;

    let maxLength = 1; // To store the maximum length of equal subarray
    let currentLength = 1; // To store the current length of equal subarray

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentLength++; // Increase the length if the current element is equal to the previous one
        } else {
            maxLength = Math.max(maxLength, currentLength); // Update maxLength if needed
            currentLength = 1; // Reset currentLength for the new element
        }
    }

    // Final check to update maxLength in case the longest subarray is at the end
    maxLength = Math.max(maxLength, currentLength);

    return maxLength;
}

// Example usage:
const arr = [1, 1, 0, 1, 1, 1, 0, 0, 1];
console.log(findLongestEqualSubarray(arr)); // Output: 3
