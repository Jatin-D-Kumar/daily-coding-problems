
function maxProfit(k, prices) {
    const n = prices.length;
    if (n === 0 || k === 0) return 0;

    // If k is greater than half the number of days, we can make as many transactions as we want
    if (k >= n /