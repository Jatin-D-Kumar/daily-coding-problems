
function countMonotonicPairs(arr) {
    let n = arr.length;
    let count = 0;

    // Count non-decreasing pairs
    let nonDecreasingCount = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] >= arr[i - 1]) {
