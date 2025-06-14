
function countAndSay(n) {
    // Base case
    if (n === 1) return "1";

    // Get the previous term
    let previousTerm = countAndSay(n - 1);
    let result = '';
    let count = 1;

    // Loop through the previous term to build 