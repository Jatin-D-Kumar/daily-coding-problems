
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
        while (oddCount >= k) {
            // Count the number of interesting subarrays for this right endpoint
            result += (nums.length - right);

            // Move left pointer forward to try to reduce oddCount
            if (nums[left] % 2 === 1) {
                oddCount--;
            }
            left++;
        }
    }
    
    return result;
}

// Example usage:
const nums = [1, 2, 3, 4, 5]; // Sample input
const k = 2; // Given k
console.log(countInterestingSubarrays(nums, k)); // Output the count of interesting subarrays
