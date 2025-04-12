
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
            charCount[char] = 1;
        }
    }

    // Get the frequencies of the characters
    const frequencies = Object.values(charCount);
    
    // Check if all frequencies are the same
    const firstFrequency = frequencies[0];
    if (frequencies.some(freq => freq !== firstFrequency)) {
        return 0; // Not balanced
    }

    // Calculate the number of balanced permutations
    const n = frequencies.length; // number of distinct characters
    const k = firstFrequency; // frequency of each character
    const totalLength = n * k; // total length of the string

    // Total permutations (totalLength)! / (frequency1! * frequency2! * ... * frequencyN!)
    let totalPermutations = factorial(totalLength);
    
    // Factorial of each frequency (which are all the same)
    const frequencyFactorial = factorial(k);
    
    // Si