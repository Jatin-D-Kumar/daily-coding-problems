
function hopperQueriesII(salaries, queries) {
    // Step 1: Precompute prefix sum for salaries
    const prefixSum = new Array(salaries.length + 1).fill(0);
    
    // Fil