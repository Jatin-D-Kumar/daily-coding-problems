
function minKeypresses(s) {
    const charCount = {};
    
    // Count frequency of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Create an array of frequencies and sort it in descending order
    const frequencies = Object.values(charCount).sort((a, b) => b - a);

    let keypresses = 0;
    let pressesRequired = 1; // Number of presses required for the current key

    // Iterate over the sorted frequencies and calculate keypresses
    for (let i = 0; i < frequencies.length; i++) {
        keypresses += frequencies[i] * pressesRequired;
        pressesRequired = (pressesRequired % 9)