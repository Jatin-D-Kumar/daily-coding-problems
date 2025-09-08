
function minimizeXor(arr) {
    const totalXor = arr.reduce((acc, num) => acc ^ num, 0);
    const n = arr.length;

    // Create a DP table to store results
    const dp = Array.from({ length: n + 1 }, () => new Set());
    dp[0].add(0); // Base case: XOR of an empty subset is 0

    // Iterate through each number in the array
    for (const num of arr) {
        // Update the DP table in reverse order to avoid overwriting
        for (