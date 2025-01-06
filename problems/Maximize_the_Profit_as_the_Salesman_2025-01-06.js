
function maximizeProfit(weights, profits, capacity) {
    const n = weights.length;
    // Create a 2D array to store the maximum profit for each capacity
    const dp = Array(n + 1).fill(0).map(() => Array(capa