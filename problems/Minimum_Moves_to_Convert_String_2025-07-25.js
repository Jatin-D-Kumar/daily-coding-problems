
function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a 2D array to store the minimum edit distances
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // Initialize the dp