
function longestOnes(nums, k) {
    let left = 0;
    let maxLength = 0;
    let zeroCount = 0;

    for (let right = 0; right < nums.length; right++) {
        // If we encounter a 0, we increase the zero count
        if (nums[right] === 0) {
          