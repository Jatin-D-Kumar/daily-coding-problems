
function minCostToCutCake(costs) {
    const n = costs.length;
    const dp = new Array(n + 1).fill