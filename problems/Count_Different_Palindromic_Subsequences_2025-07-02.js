
function countDistinctPalindromicSubsequences(s) {
    const n = s.length;
    const dp = Array.from(Array(n), () => Array(n).fill(0));

    // Base case: single character palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Fill the table for substrings of length 2 to n
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1; // End index of the substring

            