
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    // Create an array to store the length of the longest increasing subsequence
    const dp = new Array(nums.length).fill(1);

    // Fill the dp array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nu