
function countDistinctPalindromicSubsequences(s) {
    const n = s.length;
    const dp = Array.from(Array(n), () => Array(n).fill(0));

    // Base case: single character palindromes
    for (let i = 0; i < n; i++) {
        dp[i][