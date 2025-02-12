
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
        
        return count <= 1; // We can have at most one "jump"
    };
    
    // Binary search to find the minimum possible maximum difference
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (canAchieveMaxDiff(mid)) {
            right = mid; // Try for a smaller maximum difference
        } else {
            left = mid + 1; // Increase the maximum difference
        }
    }
    
    re