
function minInsertions(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Fill the dp table
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i < n - length + 1; i++) {
            const j = i + length - 1;
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
            }
        }
    }

    return dp[0][n - 1];
}

// Example usage:
const str = "abc";
console.log(minInsertions(str)); // Output: 2
