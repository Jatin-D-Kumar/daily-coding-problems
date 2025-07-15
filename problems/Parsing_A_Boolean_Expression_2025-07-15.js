
function evalBooleanExpr(expr) {
    const tokens = tokenize(expr);
    const outputQueue = [];
    const operatorStack = [];
    const precedence = { 'AND': 2, 'OR': 1, 'NOT': 3 };

    for (const token of tokens) {
        if (isBoolean(token)) {
            outputQueue.push(token);
        } else if (token in precedence) {
            while (operatorStack.length && 
                   precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]) {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.push(token);
        } else if (token === '(') {
            operatorStack.push(token);
        } else if (token === ')') {
            while (operatorStack.length && operator