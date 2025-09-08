
function solveEquation(equation) {
    // Split the equation into left and right parts
    const [left, right] = equation.split('=');
    
    // Function to parse the expression and return coefficients
    function parseExpression(expression) {
        const terms = expression.match(/([-+]?\d*\.?\d*x)|([-+]?\d+)/g);
        let coeffX = 0;
        let constant = 0;

        // Process each term
        terms.forEach(term => {
            if (term.includes('x')) {
                const coeff = term.replace('x', '');
                coeffX += coeff === '' || coeff === '+' ? 1 : coeff === '-' ? -1 : parseInt(coeff);
       