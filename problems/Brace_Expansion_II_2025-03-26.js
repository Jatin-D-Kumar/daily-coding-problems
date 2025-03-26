
function braceExpansionII(expression) {
    // A function to parse the given expression and generate combinations
    function parseExpression(expr) {
        let stack = [];
        let currentSet = new Set();
        let currentStr = '';
        let i = 0;

        while (i < expr.length) {
            if (expr[i] === '{') {
                if (currentStr) {
                    currentSet.add(currentStr);
                    currentStr = '';
                }
                let j = i + 1, braceCount = 1;
                while (braceCoun