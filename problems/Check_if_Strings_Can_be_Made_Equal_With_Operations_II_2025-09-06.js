
function canBeMadeEqual(str1, str2) {
    // Helper function to count character frequencies
    const getCharFrequency = (str) => {
        const freq = {};
        for (let char of str) {
            freq[char] = (freq[char] || 0) + 1;
        }
        return freq;
    };

    // Get character frequencies for both strings
    const freq1 = getCharFrequency(str1);
    const freq2 = getCharFrequency(str2);

    // Compare the frequency objects
    if (Object.keys(freq1).length !== Object.keys(freq2).length) {
        return false; // Different sets of characters
    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false; // Different frequencies for some character
        }
    }

    // Sort both strings and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(canBeMadeEqual("abc", "bca")); // true
console.log(canBeMadeEqual("aabbcc", "abcabc")); // true
console.log(canBeMadeEqual("aabbc", "abbbc")); // false
