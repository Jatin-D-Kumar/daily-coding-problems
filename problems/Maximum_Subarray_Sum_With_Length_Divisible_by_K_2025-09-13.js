
function maxSubarraySumDivK(nums, k) {
    const n = nums.length;
    let maxSum = Number.NEGATIVE_INFINITY; // To store the maximum sum found
    const prefixSums = new Array(n + 1).fill(0); // Prefix sum array

    // Step 1: Calculate prefix sums
    for (let i = 0; i < n; i++) {
        prefi