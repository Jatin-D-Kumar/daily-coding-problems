
function longestWPI(hours) {
    const n = hours.length;
    const prefixSum = new Array(n + 1).fill(0);
    
    // Create a prefix sum array where we count well-performing days
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + (hours[i] > 8 ? 1 : -1);
    }

    const stack = [];
    let maxLength = 0;

    // Use a stack to find the longest well-performing interval
    for (let i = 0; i <= n; i++) {
        if (stack.length === 0 || prefixSum[i] < prefixSum[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }

    // Now we will find the longest interval
    for (let i = n; i >= 0; i--) {
        while (stack.length > 0 && prefixSum[i] > prefixSum[stack[stack.length - 1]]) {
            maxLength = Math.max(maxLength, i - stack.pop());
        }
    }

    return maxLength;
}

// Example usage:
const hours = [9, 9, 6, 0, 6, 6, 9];
console.log(longestWPI(hours)); // Output: 3
