
function longestTurbulentSubarray(arr) {
    if (arr.length === 0) return 0;

    let maxLength = 1; // At least one element is a turbulent subarray
    let currentLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] && (i === 1 || arr[i - 1] <= arr[i - 2])) {
            // Increasing
            currentLength++;
        } else if (arr[i] < arr[i - 1] && (i === 1 || arr[i - 1] >= arr[i - 2])) {
            // Decreasing
            currentLength++;
        } else {
            // Reset current length
            currentLength = 2; // Start a new turbulent subarray with the last two elements
        }

        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

// Example usage:
const arr = [9, 4, 2, 10, 7, 8, 8, 1, 3];
console.log(longestTurbulentSubarray(arr)); // Output: 5
