
function leastOperatorsToExpressNumber(n, target) {
    if (target === 0) return 0; // If target is 0, no operations needed
    if (target === 1) return 1; // If target is 1, one operation (1 itself)

    const queue = [{ value: 1, steps: 1 }]; // Start with 1 and 1 operation
    const visited = new Set(); // To keep track of visited numbers
    visited.add(1);

    while (queue.length > 0) {
 