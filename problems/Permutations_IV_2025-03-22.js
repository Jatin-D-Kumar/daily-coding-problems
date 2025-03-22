
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
        if (used[i]) continue; // Skip used 