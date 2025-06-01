
function findArrayFromSubsetSums(subsetSums) {
    // Sort the subset sums
    subsetSums.sort((a, b) => a - b);
    
    // The first element should be 0 (the sum of the empty subset)
    if (subsetSums[0] !== 0) {
        return [];
    }

   