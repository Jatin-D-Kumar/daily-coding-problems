
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    // Create an array to store the length of the longest increasing subsequence
    const dp = new Array(nums.length).fill(1);

    // Fill the dp array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // The length of the longest increasing subsequence is the maximum value in dp
    return Math.max(...dp);
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
