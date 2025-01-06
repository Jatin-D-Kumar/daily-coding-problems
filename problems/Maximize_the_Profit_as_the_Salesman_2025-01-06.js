
function maximizeProfit(weights, profits, capacity) {
    const n = weights.length;
    // Create a 2D array to store the maximum profit for each capacity
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    // Build the dp array
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // Include the item
         