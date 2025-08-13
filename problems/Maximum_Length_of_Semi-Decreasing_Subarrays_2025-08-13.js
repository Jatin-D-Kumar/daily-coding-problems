
function maxLengthOfSemiDecreasingSubarrays(arr) {
    if (arr.length === 0) return 0;

    let maxLength = 1; // At least one element can form a semi-decreasing subarray
    let currentLength = 1;

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Check if the current element is less than or equal to the previous element
        if (arr[i] <= arr[i - 1]) {
            currentLength++; // Increase the current length of the semi-decreasing subarray
        } else {
            maxLength = Math.max(maxLength, currentLength); // Update the maximum length
            currentLength = 1; // Reset current length for a new subarray
        }
    }

    // After the loop, we need to do a final check to update maxLength
    maxLength = Math.max(maxLength, currentLength);

    return maxLength;
}

// Example usage:
const arr = [5, 4, 4, 3, 2, 1];
console.log(maxLengthOfSemiDecreasingSubarrays(arr)); // Output: 6

const arr2 = [1, 3, 2, 1, 4];
console.log(maxLengthOfSemiDecreasingSubarrays(arr2)); // Output: 3
