
function minimizeMaxDifference(nums) {
    // Sort the array
    nums.sort((a, b) => a - b);
    
    let n = nums.length;
    let left = 0;
    let right = Math.max(...nums) - Math.min(...nums);
    
    // Function to check if we can achieve a maximum difference of maxDiff
    const canAchieveMaxDiff = (maxDiff) => {
        let prev = nums[0];
        let count = 0;
        
        for (let i = 1; i < n; i++) {
            if (nums[i] - prev > maxDiff) {
                count++;
                prev = nums[i - 1]; // Move to the last element that was accepted
            } else {
                prev = nums[i];
            }
        }
        
