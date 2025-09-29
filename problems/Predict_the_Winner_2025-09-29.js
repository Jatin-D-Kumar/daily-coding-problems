
function PredictTheWinner(nums) {
    const n = nums.length;
    // Create a DP table to store the maximum difference in scores
    // between the current player and the opponent
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: when the array has only one element, the current player takes it
   