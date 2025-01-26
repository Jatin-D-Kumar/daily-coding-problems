
function isArmstrongNumber(num) {
    // Convert the number to a string to easily access each digit
    const strNum = num.toString();
    const numDigits = strNum.length;

    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt