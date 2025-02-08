
function countDifferentGCDs(nums) {
    const maxNum = Math.max(...nums);
    const gcdCount = new Array(maxNum + 1).fill(0);
    
    // Count occurrences of each number in the input array
    const numCount = new Array(maxNum + 1).fill(0);
    for (const num of nums)