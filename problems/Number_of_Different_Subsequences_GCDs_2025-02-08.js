
function countDifferentGCDs(nums) {
    const maxNum = Math.max(...nums);
    const gcdCount = new Array(maxNum + 1).fill(0);
    
    // Count occurrences of each number in the input array
    const numCount = new Array(maxNum + 1).fill(0);
    for (const num of nums) {
        numCount[num]++;
    }

    // Iterate through all possible GCDs from 1 to maxNum
    for (let g = 1; g <= maxNum; g++) {
        let totalCount = 0;

        // Check multiples of g
        for (let multiple = g; multiple <= maxNum; multiple += g) {
        