
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
 