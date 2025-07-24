
function sumOfPowerOfAllSubsequences(arr) {
    const n = arr.length;
    let totalSum = 0;

    // Calculate the sum of powers of all subsequences
    for (let i = 0; i < n; i++) {
        // Each el