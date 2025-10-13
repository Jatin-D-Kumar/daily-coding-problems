
function hopperQueriesII(salaries, queries) {
    // Step 1: Precompute prefix sum for salaries
    const prefixSum = new Array(salaries.length + 1).fill(0);
    
    // Fill prefixSum array
    for (let i = 1; i <= salaries.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + salaries[i - 1];
    }
    
    // Step 2: Handle each query
    