
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    // Create an array to store the length of the longest increasing subsequence
    const dp = new Array(nums.length).fill(1);

    // Iterate through the array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // If the current number is greater than the previous number
            if (nums[i] > nums[j]) {
                // Update the dp array with the maximum length found
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // The maximum value in dp array is the length of the longest increasing subsequence
    return Math.max(...dp);
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
