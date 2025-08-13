
function maxLengthOfSemiDecreasingSubarrays(arr) {
    if (arr.length === 0) return 0;

    let maxLength = 1; // At least one element can form a semi-decreasing subarray
    let currentLength = 1;

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Check if the current element is less than or equal to the previous element
        if (arr[i] <= arr[i - 1]) {
   