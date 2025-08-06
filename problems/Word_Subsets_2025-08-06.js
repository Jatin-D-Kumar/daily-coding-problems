
function wordSubsets(A, B) {
    // Create a frequency count for all characters needed from B
    const freqB = Array(26).fill(0);
    
    for (const word of B) {
        const count = Array(26).fill(0);
        for (const char of word) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            freqB[i] = Math.max(freqB[i], count[i]);
        }
    }

    const result = [];
    
    // Check each word in A against the frequency count from B
    for (const word of A) {
        const count = Array(26).fill(0);
        for (const char of word) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        let isUniversal = true;
        for 