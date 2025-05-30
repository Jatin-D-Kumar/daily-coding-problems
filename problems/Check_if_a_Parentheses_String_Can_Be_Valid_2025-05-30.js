
function checkValidString(s) {
    let low = 0; // Count of open parentheses
    let high = 0; // Count of open parentheses and wildcards

    for (let char of s) {
        if (char === '(') {
            low++;
            high++;
        } else if (char === ')') {
            low--;
            high--;
        } else { // char === '*'
            low--; // Treat '*' as ')'
            high++; // Treat '*' as '('
        }

        // If low is negative, we have more ')' than '('
        if (low < 0) {
            low = 0; // Reset low to 0, as we can't have negative open parentheses
        }

        // If high is negative, we have more ')' than we can match with '(' or '*'
        if (high < 0) {
            return false; // Not valid
        }
    }

    // At the end, low should be 0 for the string to be valid
    return low === 0;
}

// Example usage:
console.log(chec