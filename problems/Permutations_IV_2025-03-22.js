
function permuteUnique(nums) {
    const results = [];
    nums.sort((a, b) => a - b); // Sort the array to handle duplicates
    backtrack(nums, [], Array(nums.length).fill(false), results);
    return results;
}

function backtrack(nums, path, used, results) {
    if (path.length === nums.length) {
        results.push([...path]); // Add a copy of the current path to results
        return;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue; // Skip used elements
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; // Skip duplicates
        
        used[i] = true; // Mark the element as used
        path.push(nums[i]); // Add the element to the current path
        backtrack(nu