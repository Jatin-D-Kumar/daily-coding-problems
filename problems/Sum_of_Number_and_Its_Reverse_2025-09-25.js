
function sumOfNumberAndItsReverse(num) {
    // Convert the number to a string
    const numStr = num.toString();
    
    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');
    
    // Convert the reversed str