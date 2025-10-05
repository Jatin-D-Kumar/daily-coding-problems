
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
            const newProd = prod * val;
            if (newProd > target) continue;   // no need to track larger products
            const current = dp.get(newProd) || 0;
            updates.push([newProd, current + ways]);
        }

        for (const [prod, newWays] of updates) {
            dp.set(prod, newWays);
        }
    }

    let ans = dp.get(target) || 0;
    // Exclude the empty subset when target == 1
    if (target === 1) ans -= 1;
    return ans;
}

/* ---------- Sample usage below – not part of the required function ---------- */

// Example 1
const nums1 = [2, 3, 6, 1];
const target1 = 6;
console.log(countWays(nums1, target1)); // Output: 