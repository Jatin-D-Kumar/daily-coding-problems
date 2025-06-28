
function buildArray(n, m, k) {
    // If K is larger than n, we can fill the array with the maximum value
    if (k >= n) {
        return Array(n).fill(m);
    }

    // The result array
    const result = new Array(n).fill(0);
    
    // Set the largest element to `m`
    result[0] = m;

    // Start filling the rest of the array with values
    // that allow us to perform K comparisons
    for (let i = 1; i < n; i++) {
        // Fill in values under `m`
        result[i] = Math.min(m - 1, i);
    }
    
    // Return the array
    return result;
}

// Example usage:
const n = 5, m = 10, 