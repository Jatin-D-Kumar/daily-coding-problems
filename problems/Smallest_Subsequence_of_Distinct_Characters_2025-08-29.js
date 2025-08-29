
function smallestSubsequence(s) {
    const lastOccurrence = {};
    const seen = {};
    const result = [];

    // Record the last occurrence of each character in the string
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

      