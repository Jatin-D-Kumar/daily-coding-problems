
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
        // Skip used numbers
        if (used[i]) continue;

        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

        used[i] = true; // Mark the number as used
        path.push(nums[i]); // Add the number to the current path

        backtrack(nums, path, used, results); // Recurse

        // Backtrack
        used[i] = false; // Unmark the number
        path.pop(); // Remove the last number from the current path
    }
}

// Example usage:
const nums = [1, 1, 2];
const uniquePermutations = permuteUnique(nums);
console.log(uniquePermutations);
