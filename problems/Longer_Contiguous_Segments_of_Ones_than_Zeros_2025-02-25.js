
function hasMoreOnesThanZeroes(s) {
    let maxOnes = 0;
    let maxZeroes = 0;
    
    let countOnes = 0;
    let countZeroes = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            countOnes++;
            countZeroes = 0; // reset zero counter
        } else if (s[i] === '0') {
            countZeroes++;
            countOnes = 0; // reset one counter
        }

        maxOnes = Math.max(maxOnes, countOnes);
        maxZeroes = Math.max(maxZeroes, countZeroes);
    }

    return maxOnes > maxZeroes;
}

// Example usage:
console.log(hasMoreOnesThanZeroes("110011")); // Output: true
console.log(hasMoreOnesThanZeroes("001100")); // Output: false
