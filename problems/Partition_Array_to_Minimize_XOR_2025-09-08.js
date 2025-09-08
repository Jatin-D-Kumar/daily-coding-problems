
function minimizeXor(arr) {
    const totalXor = arr.reduce((acc, num) => acc ^ num, 0);
    const n = arr.length;

    // Create a DP table to store results
    const dp = Array.from({ length: n + 1 }, () => new Set());
    dp[0].add(0); // Base case: XOR of an empty subset is 0

    // Iterate through each number in the array
    for (const num of arr) {
        // Update the DP table in reverse order to avoid overwriting
        for (let j = n - 1; j >= 0; j--) {
            for (const xor of dp[j]) {
                dp[j + 1].add(xor ^ num);
            }
        }
        // Include current number as a single element subset
        dp[1].add(num);
    }

    // We need to look for the minimum XOR between totalXor and any XOR value from dp
    let minXor = Infinity;
    for (let j = 1; j < dp.length; j++) {
        for (const xor of dp[j]) {
            const currentXor = xor ^ totalXor;
            minXor = Math.min(minXor, currentXor);
        }
    }

    return minXor;
}

// Example usage
const arr = [1, 2, 3];
console.log(minimizeXor(arr)); // Output will be the minimized XOR
