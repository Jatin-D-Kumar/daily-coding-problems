
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

            if (s[i] === s[j]) {
                // Count palindromic subsequences for s[i..j]
                let low = i + 1;
                let high = j - 1;

                // Find boundaries for the same characters
                while (low <= high && s[low] !== s[i]) low++;
                while (low <= high && s[high] !== s[j]) high--;

                if (low > high) {
                    // No same characters between
                    dp[i][j] = dp[i + 1][j - 1] + 2; // +2 for the two same characters
                } else if (low === high) {
                    // One same character between
                    dp[i][j] = dp[i + 1][j - 1] + 1; // +1 for the two same characters
                } else {
                    // More than one same character between
                    dp[i][j] = dp[i + 1][j - 1] - dp[low + 1][high - 1] + 2;
                }
            } else {
                // Different characters
   