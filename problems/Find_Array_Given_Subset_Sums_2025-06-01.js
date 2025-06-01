
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
        if (used.size === subsetSums.length) {
            return true;
        }

        for (let num of originalArray) {
            const newSum = currentSum + num;
            if (!used.has(newSum)) {
                used.add(newSum);
                if (backtrack(newSum)) {
                    return true;
                }
                used.delete(newSum);
            }
        }

        return false;
    }

    // Try to find the original array
    for (let i = 1; i < subsetSums.length; i++) {
        const sum = subsetSums[i];
        if (!used.has(sum)) {
            originalArray.push(sum);
            used.add(sum);
            if (backtrack(sum)) {
                return originalArray;
            }
            o