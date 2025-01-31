
function getHappyString(n, k) {
    const happyStrings = [];
    
    function backtrack(currentString) {
        // If the current string reaches the desired length, add it to the list
        if (currentString.length === n) {
            happyStrings.push(currentString);
            return;
        }
        
        // Try adding 'a', 'b', and 'c' to the current string
        for (let char of ['a', 'b', 'c']) {
            // Ensure the last character is not the same as the current character
            if (currentString.length === 0 || currentString[currentString.length - 1] !== char) {
                backtrack(currentString + char);
            }
        }
    }
    
    // Start backtracking with an empty string
    backtrack('');
    
    // Sort the happy strings lexicographically
    happyStrings.sort();
    
    // Return the k-th happy string (1-indexed)
    return k <= happyStrings.length ? happyStrings[k - 1] : '';
}

// Example usage:
const n = 3; // Length of the happy string
const k = 5; // k-th lexicographical string
console.log(getHappyString(n, k)); // Output: "cab"
