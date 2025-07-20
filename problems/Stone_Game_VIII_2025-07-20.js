
function stoneGameVIII(stones) {
    const n = stones.length;
    // Calculate the prefix sums
    const prefixSum = new Array(n);
    prefixSum[0] = stones[0];
    for (let i = 