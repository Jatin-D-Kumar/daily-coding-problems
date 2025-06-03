
function generateParenthesis(n) {
    const result = [];

    function backtrack(current, open, close) {
        // If the current string is of the maximum length, add it to the result
        if (current.length === n * 2) {
            result.push(current);
            return;
        }

        // If we can add an open parenthesis, do it
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }

        // If we can add a close parenthesis, do it
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
}

// Example usage:
const n = 3;
console.log(generateParenthesis(n)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
