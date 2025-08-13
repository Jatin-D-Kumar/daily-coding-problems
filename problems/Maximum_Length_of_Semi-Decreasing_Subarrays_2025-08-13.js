
function maxLengthOfSemiDecreasingSubarrays(arr) {
    if (arr.length === 0) return 0;

    let maxLength = 1; // At least one element can form a semi-decreasing subarray
    let currentLength = 1;

    // Iterate th