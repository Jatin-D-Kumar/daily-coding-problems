
function longestOnes(nums, k) {
    let left = 0;
    let maxLength = 0;
    let zeroCount = 0;

    for (let right = 0; right < nums.length; right++) {
        // If we encounter a 0, we increase the zero count
        if (nums[right] === 0) {
            zeroCount++;
        }

        // If the count of zeros exceeds k, we need to shrink the window
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // Calculate the maximum length of the window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const nums = [1, 1, 0, 0, 1, 1, 1, 0, 1];
const k = 2;
console.log(longestOnes(nums, k)); // Output: 7
