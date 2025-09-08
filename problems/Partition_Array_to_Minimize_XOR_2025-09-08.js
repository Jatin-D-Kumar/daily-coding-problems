
function minimizeXor(arr) {
    const totalXor = arr.reduce((acc, num) => acc ^ num, 0);
    const n = arr.length;

    // Create a DP table to store results
    const dp = Array.from({ length: n + 1 }, () => new Set());