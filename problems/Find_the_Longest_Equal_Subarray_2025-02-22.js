
function findLongestEqualSubarray(arr) {
    if (arr.length === 0) return 0;

    let maxLength = 1; // To store the maximum length of equal subarray
    let currentLength = 1; // To store the current length of equal subarray

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === ar