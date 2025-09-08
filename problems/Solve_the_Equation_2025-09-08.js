
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
            } else {
                constant += parseInt(term);
            }
        });

        return [coeffX, constant];
    }

    // Parse the left and right expressions
    const [a, b] = parseExpression(left);
    const [c, d] = parseExpression(right);
    
    // Rearrange the equation to get all x terms on one side and constants on the other
    const totalX = a - c;
    const totalConstant = d - b;

    // Handle special cases
    if (totalX === 0) {
        if (totalConstant === 0) {
            return "Infinite solutions"; // All values of x are solutions
        } else {
            return "No solution"; // No values of x can satisfy the equation
        }
    }

    // Calculate the value of x
    const x = totalConstant / totalX;
    
    return `x=${x}`;
}

// Example usage:
console.log(solveEquation("3x+2=2x+3")); /