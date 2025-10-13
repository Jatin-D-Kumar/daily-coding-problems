
function hopperQueriesII(salaries, queries) {
    // Step 1: Precompute prefix sum for salaries
    const prefixSum = new Array(salaries.length + 1).fill(0);
    
    // Fill prefixSum array
    for (let i = 1; i <= salaries.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + salaries[i - 1];
    }
    
    // Step 2: Handle each query
    return queries.map(query => {
        const [type, x, y] = query;
        
        if (type === 1) {
            // Query type 1: Sum of salaries in the range [x, y]
            return prefixSum[y] - prefixSum[x - 1];
        } else if (type === 2) {
            // Query type 2: Count of salaries in the range [x, y]
            return salaries.slice(x - 1, y).length;
        }
    });
}

// Example Usage:

// Array of salaries of employees
const salaries = [100, 200, 300, 400, 500];

// Queries:
const queries = [
   