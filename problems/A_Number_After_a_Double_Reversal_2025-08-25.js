
function doubleReversal(n) {
    // Convert the number to string to manipulate it
    const strNum = n.toString();

    // Reverse the string
    const reversedOnce = strNum.split('').reverse().join('');

    // Reverse it again
    const reversedTwice = reversed