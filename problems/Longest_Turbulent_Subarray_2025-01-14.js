
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
            currentLength