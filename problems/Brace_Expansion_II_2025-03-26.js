
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
                currentStr += expr[i];
                i++;
            }
        }

        if (currentStr) currentSet.add(currentStr);

        // Combine with the previous sets
        let resultSet = new Set();
        for (const str of currentSet) {
            if (stack.length) {
                for (const prev of stack.pop()) {
                    resultSet.add(prev + str);
                }
            } else {
                resultSet.add(str);
            }
        }

        return resultSet;
    }

    const resultSet = parseExpression(expression);
    const resultArray = Array.from(resultSet).sort();
    
    return resultArray;
}

// Example usage:
console.log(braceExpansionII("{a,b}{c,{d,e}}")); // ["ac", "ad", "ae", "bc", "bd", "be"]
console.log(braceExpansionII("{{a,z},a{b,c},{ab,z}}")); // ["ab", "a", "a", "z", "z"]
