
/**
 * Count the number of non‑empty subsets of `nums` whose product equals `target`.
 *
 * @param {number[]} nums  - array of positive integers
 * @param {number} target  - positive integer target product
 * @returns {number}       - number of subsets with product == target
 */
function countWays(nums, target) {
    // Map: product -> number of ways to obtain it
    const dp = new Map();
    dp.set(1, 1);                // empty subset

    for (const val of nums) {
        // collect updates first to avoid influencing the current iteration
        const updates = [];

        for (const [prod, ways] of dp.entries()) {
            const n