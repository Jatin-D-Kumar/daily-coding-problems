
function generateOddCountString(input) {
    const charCount = {};

    // Step 1: Count occurrences of each character
    for (let char of input) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Collect characters with odd counts
    const oddCo