
function addStrings(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    // Loop until both numbers are fully processed
    while (i >= 0 || j >= 0 || carry > 0) {
        let x = i >= 0 ? num1[i] - '0' : 0; // Convert char to int if i