
function PredictTheWinner(nums) {
    const n = nums.length;
    // Create a DP table to store the maximum difference in scores
    // between the current player and the opponent
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: when the array has only one element, the current player takes it
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    // Fill the DP table for subarrays of length 2 to n
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            const j = i + length - 1;
            // Current player chooses nums[i] or nums[j] and maximizes the difference
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    // If the maximum difference at the full array level is >= 0, Player 1 can win
    return dp[0][n - 1] >= 0;
