
function smallestSubsequence(s) {
    const lastOccurrence = {};
    const seen = {};
    const result = [];

    // Record the last occurrence of each character in t