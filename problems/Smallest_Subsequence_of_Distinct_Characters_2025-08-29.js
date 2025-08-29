
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

        // If the character is already in the result, skip it
        if (seen[char]) {
            continue;
        }

        // Maintain characters in result that are lexicographically smaller
        // and can be found later in the string
        while (result.length > 0 && result[result.length - 1] > char && lastOccurrence[result[result.length - 1]] > i) {
            const removedChar = result.pop();
            seen[removedChar] = false; // Mark the character as not seen
        }

        // Add the current character to the result
        result.push(char);
        seen[char] = true; // Mark it as seen
    }

    // Join the result array to form the final 