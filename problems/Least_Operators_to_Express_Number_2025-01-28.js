
function leastOperatorsToExpressNumber(n, target) {
    if (target === 0) return 0; // If target is 0, no operations needed
    if (target === 1) return 1; // If target is 1, one operation (1 itself)

    const queue = [{ value: 1, steps: 1 }]; // Start with 1 and 1 operation
    const visited = new Set(); // To keep track of visited numbers
    visited.add(1);

    while (queue.length > 0) {
        const { value, steps } = queue.shift();

        // Try all possible operations
        for (let i = 1; i <= n; i++) {
            // Addition
            const addResult = value + i;
            if (addResult === target) return steps + 1;
            if (addResult < target && !visited.has(addResult)) {
                visited.add(addResult);
                queue.push({ value: addResult, steps: steps + 1 });
            }

            // Multiplication
            const mulResult = value * i;
            if (mulResult === target) return steps + 1;
            if (mulResult < target 