
function wordSubsets(A, B) {
    // Create a frequency count for all characters needed from B
    const freqB = Array(26).fill(0);
    
    for (const word of B) {
        const count = Array(26).fill(0);
        for (const char of word) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0