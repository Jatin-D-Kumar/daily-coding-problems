
function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i -