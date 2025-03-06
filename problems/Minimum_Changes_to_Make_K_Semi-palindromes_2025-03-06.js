
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
    dp[0][0] = 0; // Bas