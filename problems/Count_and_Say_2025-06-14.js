
function countAndSay(n) {
    // Base case
    if (n === 1) return "1";

    // Get the previous term
    let previousTerm = countAndSay(n - 1);
    let result = '';
    let count = 1;

    // Loop through the previous term to build the new term
    for (let i = 1; i < previousTerm.length; i++) {
        // If the current digit is the same as the previous one, increment count
        if (previousTerm[i] === previousTerm[i - 1]) {
            count++;
        } else {
            // Append the count and the digit to the result
            result += count.toString() + previousTerm[i - 1];
            count = 1; // Reset count for the new digit
        }
    }
    
    // Append the last counted digit
    result += count.toString() + previousTerm[previousTerm.length - 1];

    return result;
}

// Example usage
console.log(countAndSay(1)); // Output: "1"
console.log(countAndSay(2)); // Output: "11"
console.log(countAndSay(3)); // Output: "21"
console.log(countAndSay(4)); // Output: "1211"
console.log(countAndSay(5)); // Output: "111221"
