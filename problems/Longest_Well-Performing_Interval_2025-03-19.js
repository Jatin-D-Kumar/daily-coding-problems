
function longestWPI(hours) {
    const n = hours.length;
    const prefixSum = new Array(n + 1).fill(0);
    
    // Create a prefix sum array where we count well-performing days
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + (hours[i] > 8 ? 1 : -1);
    }

    const stack = [];
  