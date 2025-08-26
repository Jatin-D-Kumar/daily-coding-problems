
function threeSumClosest(nums, target) {
    // Sort the array
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // Update closestSum if the currentSum is closer to target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Move the pointers based on the comparison of currentSum and target
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If currentSum is exactly equal to target, we found the closest sum
                return currentSum;
            }
        }
    }

    return closestSum;
}

// Example usage:
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target)); // Output: 2
