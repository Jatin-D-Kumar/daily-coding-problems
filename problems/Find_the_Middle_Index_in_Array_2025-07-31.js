
function findMiddleIndex(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        // Right sum is totalSum - leftSum - nums[i]
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i; // Return the middle index
        }
        leftSum += nums[i]; // Update leftSum for the next iteration
    }

    return -1; // Return