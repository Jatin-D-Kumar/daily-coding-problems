
function countDifferentGCDs(nums) {
    const maxNum = Math.max(...nums);
    const gcdCount = new Array(maxNum + 1).fill(0);
    
   