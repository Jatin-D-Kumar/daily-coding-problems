
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
        return false; // Different sets