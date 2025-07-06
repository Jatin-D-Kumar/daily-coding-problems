
function maxProfit(k, prices) {
    const n = prices.length;
    if (n === 0 || k === 0) return 0;

    // If k is greater than half the number of days, we can make as many transactions as we want
    if (k >= n / 2) {
        let maxProfit = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i - 1]) {
                maxProfit += prices[i] - prices[i - 1];
            }
        }
        return maxProfit;
    }

    // Create a DP table
    const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

    for (let i = 1; i <= k; i++) {
        let maxDiff = -prices[0]; // This will store the maximum dif