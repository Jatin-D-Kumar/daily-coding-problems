
function leastOperatorsToExpressNumber(n, target) {
    if (target === 0) return 0; // If target is 0, no operations needed
    if (target === 1) return 1; // If target is 1, one operation (1 itself