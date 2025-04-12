
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function countBalancedPermutations(s) {
    const charCount = {};
    
    // Count occurrences of each character
    for (let char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char