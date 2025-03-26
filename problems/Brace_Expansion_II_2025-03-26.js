
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
                while (braceCount > 0) {
                    if (expr[j] === '{') braceCount++;
                    if (expr[j] === '}') braceCount--;
                    j++;
                }
                const innerSet = parseExpression(expr.slice(i + 1, j - 1));
                stack.push(currentSet);
                currentSet = innerSet;
                i = j;
            } else if (expr[i] === ',') {
                if (currentStr) currentSet.add(currentStr);
                currentStr = '';
                i++;
            } else {
                currentStr +=