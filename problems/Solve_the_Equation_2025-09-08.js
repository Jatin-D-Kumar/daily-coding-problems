
function solveEquation(equation) {
    // Split the equation into left and right parts
    const [left, right] = equation.split('=');
    
    // Function to parse the expression and return coefficients
    function parseExpression(expression) {
        const terms = expression.match(/([-+]?\d*\.?\d*x)|([-+]?\d+)/g);
        let coeffX = 0;
        let constant = 0;

        // Process each term
        terms.forEac