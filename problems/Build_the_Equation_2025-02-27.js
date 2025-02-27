
function buildEquation(num1, num2, operator) {
    let equation = "";

    // Check the operator and build the equation string accordingly
    switch (operator) {
        case '+':
            equation = `${num1} + ${num2}`;
            break;
        case '-':
            equation = `${num1} - ${num2}`;
            break;
        case '*':
            equation = `${num1} * ${num2}`;
            break;
        case '/':
            if (num2 !== 0) {
                equation = `${num1} / ${num2}`;
            } else {
                return "Error: Division by zero";
            }
            break;
        default:
            return "Error: Invalid operator";
    }

    return equation;
}

// Example usage:
console.log(buildEquation(5, 3, '+')); // Output: "5 + 3"
console.log(buildEquation(10, 2, '-')); // Output: "10 - 2"
console.log(buildEquation(4, 5, '*')); // Output: "