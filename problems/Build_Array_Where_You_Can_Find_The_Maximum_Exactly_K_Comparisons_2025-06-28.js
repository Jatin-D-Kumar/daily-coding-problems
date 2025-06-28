
function buildArray(n, m, k) {
    // If K is larger than n, we can fill the array with the maximum value
    if (k >= n) {
        return Array(n).fill(m);
    }

    // The result array
    const result = new Array(n).fill(0);
    
    /