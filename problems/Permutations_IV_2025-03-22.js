
function permuteUnique(nums) {
    const results = [];
    nums.sort((a, b) => a - b); // Sort the array to handle duplicates
    backtrack(nums, [], Array(nums.length).fill(false), results);
    return results;
}

function backtrack(nums, path, u