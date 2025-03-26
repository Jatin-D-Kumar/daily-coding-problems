
function braceExpansionII(expression) {
    // A function to parse the given expression and generate combinations
    function parseExpression(expr) {
        let stack = [];
        let currentSet = new Set();
        let currentStr = '';
        let i = 0;

        whil