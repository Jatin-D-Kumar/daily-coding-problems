
function minChangesToKSemiPalindromes(s, K) {
    const n = s.length;

    // Function to calculate the number of changes needed to make a substring semi-palindrome
    function semiPalindromeChanges(start, end) {
        let changes = 0;
        while (start < end) {
            if (s[start] !== s[end]) {
                changes++;
            }
            start++;
            end--;
        }
        return changes;
    }

    // DP table
    const dp = Array.from({ length: n + 1 }, () => Array(K + 1).fill(Infinity));
    dp[0][0] = 0; // Base case: 0 changes for 0 characters and 0 semi-palindromes

    // Fill the DP table
    for (let j = 1; j <= K; j++) {
        for (let i = 1; i <= n; i++) {
            for (let k = 0; k < i; k++) {
                const changes = semiPalindromeChanges(k, i - 1);
                dp[i][j] = Math.min(dp[i][j], dp[k][j - 1] + changes);
            }
        }
    }

    return dp[n][K] === Infinity ? -1 : dp[n][K];
}

// Example usage:
const s = "ababa";
const K = 2;
console.log(minChangesToKSemiPalindromes(s, K)); // Output the minimum changes
