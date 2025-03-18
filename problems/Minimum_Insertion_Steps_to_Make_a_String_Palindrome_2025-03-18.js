
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
             