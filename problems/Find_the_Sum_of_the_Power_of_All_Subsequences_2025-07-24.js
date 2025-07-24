
function sumOfPowerOfAllSubsequences(arr) {
    const n = arr.length;
    let totalSum = 0;

    // Calculate the sum of powers of all subsequences
    for (let i = 0; i < n; i++) {
        // Each element arr[i] appears in 2^(n-1) subsequences
        const contribution = arr[i] ** 2 * (1 << (n - 1)); // 1 << (n - 1) is 2^(n-1)
        totalSum += contribution;
    }

    return totalSum;
}

// Example usage:
const arr = [1, 2, 3];
const result = sumOfPowerOfAllSubsequences(arr);
console.log(result); // Output the result
