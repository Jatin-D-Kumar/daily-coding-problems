
function maxProfit(prices) {
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If the current price is greater than the prev