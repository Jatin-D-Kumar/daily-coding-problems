
function countPartitions(nums, k) {
    const n = nums.length;
    let count = 0;
    
    // Initialize deques for max and min
    const maxDeque = [];
    const minDeque = [];
    
    let j = 0; // Starting index of the sliding window
    
    for (let i = 0; i < n; i++) {
        // Maintain the max deque
        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[i]) {
            maxDeque.pop();
        }
        maxDeque.push(i);
        
        // Maintain the min deque
        while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[i]) {
            minDeque.pop();
        }
        minDeque.push(i);
        
        // Shrink the window from the left if the condition is violated
        while (nums[maxDeque[0]] - nums[minDeque[0]] > k) {
            j++;
            if (maxDeque[0] < j) maxDeque.shift();
            if (minDeque[0] < j) minDeque.shift();
        }

        // Count valid partitions
        count += (i - j + 1);
    }
    
    return count;
}

// Example Usage:
const nums = [1, 3, 2, 4];
const k = 2;
console.log(countPartitions(nums, k)); // Output the number of valid partitions
