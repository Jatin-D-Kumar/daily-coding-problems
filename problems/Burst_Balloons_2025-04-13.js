
function maxCoins(nums) {
    // Add 1s to the beginning and end of the array
    const balloons = [1, ...nums, 1];
    const n = balloons.length;
    
    // Create a DP table
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    
    // Iterate over the length of the subarray
    for (let length = 2; length < n; length++) {
        for (let left = 0; left < n - length; left++) {
            const right = left + length;
            // Try bursting each balloon in the rang