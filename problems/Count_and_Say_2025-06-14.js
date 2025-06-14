
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
            result += count.toString() + previousTer