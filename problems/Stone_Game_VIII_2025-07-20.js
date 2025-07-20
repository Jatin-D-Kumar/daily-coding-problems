
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
    
   