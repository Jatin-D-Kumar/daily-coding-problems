
function countInterestingSubarrays(nums, k) {
    let oddCount = 0;
    let left = 0;
    let result = 0;
    
    for (let right = 0; right < nums.length; right++) {
        // Chec