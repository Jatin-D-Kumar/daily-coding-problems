
function findExtraCharacters(s, t) {
    const charCount = {};
    const extraChars = [];

    // Count the occurrences of each character in the intended string `t`
    for (const char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check each character in the original string `s`
  