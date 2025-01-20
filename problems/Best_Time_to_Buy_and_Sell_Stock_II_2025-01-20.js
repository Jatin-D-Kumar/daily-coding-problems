
function maxProfit(prices) {
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If the current price is greater than the previous price,
        // we can make a profit by selling at the current price
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - pr