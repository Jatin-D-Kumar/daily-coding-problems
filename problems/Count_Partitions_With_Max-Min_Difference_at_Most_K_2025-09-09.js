
function countPartitions(nums, k) {
    const n = nums.length;
    let count = 0;
    
    // Initialize deques for max and min
    const maxDeque = [];
    const mi