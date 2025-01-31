
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
            if (currentString.length === 0 || curren