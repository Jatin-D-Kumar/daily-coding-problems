
function addStrings(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    // Loop until both numbers are fully processed
    while (i >= 0 || j >= 0 || carry > 0) {
        let x = i >= 0 ? num1[i] - '0' : 0; // Convert char to int if in bounds
        let y = j >= 0 ? num2[j] - '0' : 0; // Convert char to int if in bounds
        
        let sum = x + y + carry; // Calculate the sum
        carry = Math.floor(sum / 10); // Determine the carry for the next iteration
        result = (sum % 10) + result; // Prepends the last digit of the sum to the result
        
        i--; // Move to the next digit in num1
        j--; // Move to the next digit in num2
    }

    return result; // Return the final result
}

// Example usage:
const num1 = "123";
const num2 = "456";
console.log(addStrings(num1, num2)); // Output: "579"
