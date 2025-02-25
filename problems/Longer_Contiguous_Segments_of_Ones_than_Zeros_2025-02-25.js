
function hasMoreOnesThanZeroes(s) {
    let maxOnes = 0;
    let maxZeroes = 0;
    
    let countOnes = 0;
    let countZeroes = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] =