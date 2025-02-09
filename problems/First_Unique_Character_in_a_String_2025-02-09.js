
function firstUniqueCharacter(s) {
    const charCount = {};

    // Count the occurrences of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first unique character
    for (let 