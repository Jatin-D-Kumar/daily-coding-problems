
function numSubarrayBoundedMax(nums, left, right) {
    let count = 0; // This will hold the total count of valid subarrays
    let totalValidSubarrays = 0; // This will count valid subarrays ending at the current index
    // Walk through each number in the array
    for (let num of nums) {
        // If the number is within the target range [left, right]
        if (num >= left 