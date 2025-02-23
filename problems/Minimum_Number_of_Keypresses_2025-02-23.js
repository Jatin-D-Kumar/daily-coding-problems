
function minKeypresses(s) {
    const charCount = {};
    
    // Count frequency of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Create an array of frequ