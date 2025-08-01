
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
            const remainingTarget = target - (nums[i] + nums[j]);

            while (left < right) {
                const currentSum = nums[left] + nums[right];

                if (currentSum < remainingTarget) {
                    left++;
                } else if (currentSum > remainingTarget) {
                    right--;
                } else {
                    // Found a quadruplet
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Move left and right pointers and skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                }
            }
        }
    }

    return result;
}

// Example usage:
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target));
// Output: [[-2, -1, 0, 1], [-2, 0, 0, 2], [-1, 0, 0, 1]]
