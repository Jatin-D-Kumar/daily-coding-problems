
function stoneGameVII(stones) {
    const n = stones.length;
    const prefixSum = new Array(n + 1).fill(0);
    
    // Calculate prefix sums
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + stones[i];
    }

    // dp[i][j] will store the maximum score the first player can achieve
    // from stones[i] to stones[j]
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let length = 1; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            const j = i + length - 1; // right index
            const leftScore = prefixSum[j + 1] - prefixSum[i + 1]; // score if we remove from left
            const rightScore = prefixSum[j] - prefixSum[i]; // score if we r