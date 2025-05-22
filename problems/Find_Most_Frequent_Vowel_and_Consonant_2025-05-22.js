
function findMostFrequentVowelAndConsonant(str) {
    // Normalize the string to lowercase
    str = str.toLowerCase();
    
    // Define vowels and initialize frequency maps
    const vowels = 'aeiou';
    const vowelCount = {};
    const consonantCount = {};
    
    // Iterate through the string
    for (let 