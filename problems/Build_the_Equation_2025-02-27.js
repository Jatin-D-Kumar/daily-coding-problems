
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
            return "Error: Invalid operato