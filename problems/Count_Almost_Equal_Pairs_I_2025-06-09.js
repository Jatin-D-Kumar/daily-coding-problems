
function countAlmostEqualPairs(arr, threshold) {
    let count = 0;
    const n = arr.length;

    // Iterate through each pair of indices (i, j)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Check if the absolute difference is within the threshold
            if (Math.abs(arr[i] - arr[j]) <= threshold) {
                count++;
