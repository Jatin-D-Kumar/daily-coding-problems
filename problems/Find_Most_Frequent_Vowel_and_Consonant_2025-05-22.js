
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
                consonantCount[char] = (consonantCount[char] || 0) + 1;
            }
        }
    }
    
    // Function to find the most frequent character in a frequency map
    function findMostFrequent(countMap) {
        let maxCount = 0;
        let mostFrequentChar = '';
        
        for (let char in countMap) {
            if (countMap[char] > maxCount) {
                maxCount = countMap[char];
                mostFrequentChar = char;
            }
        }
        
        return mostFrequentChar;
    }
    
    // Find the most frequent vowel and consonant
    const mostFrequentVowel = findMostFrequent(vowelCount);
    const mostFrequentConsonant = findMostFrequent(consonantCount);
    
    return {
        mostFrequentVowel,
        mostFrequentConsonant
    };
}

// Example usage:
const result = findMostFrequentVowelAndConsonant("Hello World!");
console.log(result); // Output: { mostFrequentVowel: 'o', mostFrequentConsonant: 'l' }
