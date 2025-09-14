
function numSubarrayBoundedMax(nums, left, right) {
    let count = 0; // This will hold the total count of valid subarrays
    let totalValidSubarrays = 0; // This will count valid subarrays ending at the current index
    // Walk through each number in the array
    for (let num of nums) {
        // If the number is within the target range [left, right]
        if (num >= left && num <= right) {
            totalValidSubarrays++;
        } 
        // If the number is greater than right, reset totalValidSubarrays
        else if (num > right) {
            totalValidSubarrays = 0; 
        } 
        // If the number is less than left, we can still count the valid subarrays 
        // that are formed from the previous valid elements
        count += tot