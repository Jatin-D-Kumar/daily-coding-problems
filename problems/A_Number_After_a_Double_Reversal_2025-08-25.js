
function doubleReversal(n) {
    // Convert the number to string to manipulate it
    const strNum = n.toString();

    // Reverse the string
    const reversedOnce = strNum.split('').reverse().join('');

    // Reverse it again
    const reversedTwice = reversedOnce.split('').reverse().join('');

    // Convert it back to an integer and return
    // Using Number() takes care of removing leading zeros
    return Number(reversedTwice);
}

// Example usage
console.log(doubleReversal(123)); // Output: 123
console.log(doubleReversal(1000)); // Output: 1
console.log(doubleReversal(12345)); // Output: 12345
console.log(doubleReversal(5000)); // Output: 5
