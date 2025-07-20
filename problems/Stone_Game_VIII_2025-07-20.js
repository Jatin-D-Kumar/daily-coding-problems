
function stoneGameVIII(stones) {
    const n = stones.length;
    // Calculate the prefix sums
    const prefixSum = new Array(n);
    prefixSum[0] = stones[0];
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + stones[i];
    }

    // Initialize the maximum value for the first choice
    let maxScore = prefixSum[n - 1];
    
    // Iterate from the end of the stones array to the second-to-last element
    for (let i = n - 2; i >= 1; i--) {
        // Update maxScore; the optimal choice for player 1 between picking stones[i] or prefixSum[i-1]
        maxScore = Math.max(maxScore, prefixSum[i]);
        // This is the new prefix sum for the next iteration
        prefixSum[i] = Mat