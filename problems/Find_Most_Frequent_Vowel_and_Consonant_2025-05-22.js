
function findMostFrequentVowelAndConsonant(str) {
    // Normalize the string to lowercase
    str = str.toLowerCase();
    
    // Define vowels and initialize frequency maps
    const vowels = 'aeiou';
    const vowelCount = {};
    const consonantCount = {};
    
    // Iterate through the string
    for (let char of str) {
        // Check if the character is a letter
        if (/[a-z]/.test(char)) {
            if (vowels.includes(char)) {
                // Count vowels
                vowelCount[char] = (vowelCount[char] || 0) + 1;
            } else {
                // Count consonants
                consonantC