
function evalBooleanExpr(expr) {
    const tokens = tokenize(expr);
    const outputQueue = [];
    const operatorStack = [];
    const precedence = { 'AND': 2, 'OR': 1, 'NOT': 3 };

    for (const token of tokens) {
        if (isBoolean(token)