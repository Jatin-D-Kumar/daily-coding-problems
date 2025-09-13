
function maxSubarraySumDivK(nums, k) {
    const n = nums.length;
    let maxSum = Number.NEGATIVE_INFINITY; // To store the maximum sum found
    const prefixSums = new Array(n + 1).fill(0); // Prefix sum array

    // Step 1: Calculate prefix sums
    for (let i = 0; i < n; i++) {
        prefixSums[i + 1] = prefixSums[i] + nums[i];
    }

    // Step 2: Iterate over possible lengths of subarrays that are multiples of k
    for (let length = k; length <= n; length += k) {
        for (let i = 0; i <= n - length; i++) {
            const currentSum = prefixSums[i + length] - prefixSums[i];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    // Step 3: Return the maximum sum found
    return maxSum;
}

// Example usage:
const nums = [1, -2, 3, 4, 5, -3];
const k = 2;
console.log(maxSubarraySumDivK(nums, k)); // Output the maximum sum with length divisible by K
