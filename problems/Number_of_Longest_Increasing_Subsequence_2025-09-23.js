
function findNumberOfLIS(nums) {
    if (nums.length === 0) return 0;

    const n = nums.length;
    const lengths = new Array(n).fill(1); // Length of the LIS ending at each index
    const counts = new Array(n).fill(1);  /