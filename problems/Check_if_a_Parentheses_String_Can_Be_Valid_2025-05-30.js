
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

        // If 