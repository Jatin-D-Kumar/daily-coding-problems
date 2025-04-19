
function repeatString(str, num) {
    // Check if the number is negative
    if (num < 0) {
        return '';
    }
    
    // Initialize an empty string to hold the result
    let result = '';
    
    // Use a loop to append the string 'num' times
    for (let i = 0; i < num; i++) {
        result += str;
    }
    
    return result;
}

// Example usage:
console.log(repeatString('abc', 3));