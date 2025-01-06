
function stoneGameVII(stones) {
    const n = stones.length;
    const prefixSum = new Array(n + 1).fill(0);
    
    // Calculate prefix sums
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + stones[i];
    }

    // dp[