
function generateOddCountString(input) {
    const charCount = {};

    // Step 1: Count occurrences of each character
    for (let char of input) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Collect characters with odd counts
    const oddCountChars = [];
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCountChars.push(char);
        }
    }

    // Step 3: Generate and return the string
    return oddCountChars.join('');
}

// Example usage:
const inputString = "aabbccdd