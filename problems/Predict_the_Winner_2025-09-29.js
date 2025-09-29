
function PredictTheWinner(nums) {
    const n = nums.length;
    // Create a DP table to store the maximum difference in scores
    // between the current player and the opponent
    const dp = Array.from({ length: n }, (