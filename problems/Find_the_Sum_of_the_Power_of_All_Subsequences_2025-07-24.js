
function sumOfPowerOfAllSubsequences(arr) {
    const n = arr.length;
    let totalSum = 0;

    // Calculate the sum of powers of all subsequences
    for (let i = 0; i < n; i++) {
        // Each element arr[i] appears in 2^(n-1) subsequences
        const contribu