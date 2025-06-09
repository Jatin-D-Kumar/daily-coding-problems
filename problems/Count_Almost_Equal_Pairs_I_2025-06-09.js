
function countAlmostEqualPairs(arr, threshold) {
    let count = 0;
    const n = arr.length;

    // Iterate through each pair of indices (i, j)
    for (let i = 0; i < n; i++) {
        