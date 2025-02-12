
function minimizeMaxDifference(nums) {
    // Sort the array
    nums.sort((a, b) => a - b);
    
    let n = nums.length;
    let left = 0;
    let right = Math.max(...nums) - Math.min(...nums);
    
    // Function t