
function minCostToCutCake(costs) {
    const n = costs.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= 0; j