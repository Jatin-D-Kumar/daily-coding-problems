
function countInterestingSubarrays(nums, k) {
    let oddCount = 0;
    let left = 0;
    let result = 0;
    
    for (let right = 0; right < nums.length; right++) {
        // Check if current number is odd
        if (nums[right] % 2 === 1) {
            oddCount++;
        }

        // When oddCount is at least k, we will look to count all subarrays
        