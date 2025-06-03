
function minSwaps(A, B) {
    const n = A.length;
    // Create an array to store the minimum swaps needed to make sequences increasing
    const dp = Array.from({ length: n }, () => [0, 0]);

    // Initialize the first element
    dp[0][0] = 0; // No swap for the first element
    dp[0][1] = 1; // One swap for the first element

    for (let i = 1; i < n; i++) {
        // Initialize the current state
        dp[i][0] = dp[i][1] = Infinity;

        // Check if we can keep the current elements without swapping
        if (A[i] > A[i - 1] && B[i] > B[i - 1]) {
            dp[i][0] = Math.min(dp[i][0], dp[i - 1][0]);
            dp[i][0] = Math.min(dp[i][