
function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate values for the second element
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;
    