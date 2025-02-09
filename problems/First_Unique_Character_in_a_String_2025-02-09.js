
function firstUniqueCharacter(s) {
    const charCount = {};

    // Count the occurrences of each character
    for (let char of s) {
        charCount[char] = (cha