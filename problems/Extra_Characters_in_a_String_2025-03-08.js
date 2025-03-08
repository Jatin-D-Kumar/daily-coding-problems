
function findExtraCharacters(s, t) {
    const charCount = {};
    const extraChars = [];

    // Count the occurrences of each character in the intended string `t`
    for (const char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check each character in the original string `s`
    for (const char of s) {
        if (!charCount[char]) {
            // If the character is not in `t`, it is an extra character
            extraChars.push(char);
        } else {
            // If it is also in `t`, we can decrease the count
            charCount[char]--;
            if (charCount[char] === 0) {
                delete charCount[char]; // Remove entry when count reaches zero to save space
            }
        }
    }

    return extraChars;
}

// Example usage:
const s = "aabbccdde";
const t = "abc";
console.log(findExtraCharacters(s, t)); // Output: ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e']
