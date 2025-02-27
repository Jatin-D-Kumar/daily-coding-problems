
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
console.log(buildEquation(4, 5, '*')); // Output: "4 * 5"
console.log(buildEquation(20, 4, '/')); // Output: "20 / 4"
console.log(buildEquation(20, 0, '/')); // Output: "Error: Division by zero"
console.log(buildEquation(10, 5, '%')); // Output: "Error: Invalid operator"
