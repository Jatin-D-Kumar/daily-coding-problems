
function generateParenthesis(n) {
    const result = [];

    function backtrack(current, open, close) {
        // If the current string is of the maximum length, add it to the result
        if (current.length === n