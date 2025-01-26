
function isArmstrongNumber(num) {
    // Convert the number to a string to easily access each digit
    const strNum = num.toString();
    const numDigits = strNum.length;

    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(strNum[i], 10);
        sum += Math.pow(digit, numDigits);
    }

    // Check if the sum is equal to the original number
    return sum === num;
}

// Example usage:
const number = 153;
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}
