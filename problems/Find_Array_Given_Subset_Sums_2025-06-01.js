
function findArrayFromSubsetSums(subsetSums) {
    // Sort the subset sums
    subsetSums.sort((a, b) => a - b);
    
    // The first element should be 0 (the sum of the empty subset)
    if (subsetSums[0] !== 0) {
        return [];
    }

    const originalArray = [];
    const used = new Set();
    used.add(0); // Start with the empty subset sum

    // Function to find the original array
    function backtrack(currentSum) {
        // If we have found all subset sums, return true
 