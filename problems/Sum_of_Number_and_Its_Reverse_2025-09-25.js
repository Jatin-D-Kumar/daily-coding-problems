
function sumOfNumberAndItsReverse(num) {
    // Convert the number to a string
    const numStr = num.toString();
    
    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');
    
    // Convert the reversed string back to a number
    const reversedNum = parseInt(reversedStr, 10);
    
    // Calculate the sum of the original number and the reversed number
    const sum = num + reversedNum;
    
    // Return or print the result
    return sum;
}

/