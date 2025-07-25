
function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a 2D array to store the minimum edit distances
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // Initialize the dp table
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i; // If word2 is empty, all characters of word1 need to be deleted
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j; // If word1 is empty, all characters of word2 need to be inserted
    }

    // Fill the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // No change needed
            } else {
                // Calculate minimum of insert, delete, or replace operation
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // Deletion
                    dp[i][j - 1] + 1, // Insertion
                    dp[i - 1][j - 1] + 1 // Replacement
                );
            }
        }
    }

    // The last cell contains the answer
    return dp[m][n];
}

// Example usage:
const word1 = "intention";
const word2 = "execution";
console.log(minDistance(word1, word2)); // Output: 5
