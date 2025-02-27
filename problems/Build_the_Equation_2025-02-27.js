
function buildEquation(num1, num2, operator) {
    let equation = "";

    // Check the operator and build the equation string accordingly
    switch (operator) {
        case '+':
            equation = `${num1} + ${num2