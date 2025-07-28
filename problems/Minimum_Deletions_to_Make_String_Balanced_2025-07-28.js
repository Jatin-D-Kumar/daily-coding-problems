
function minDeletionsToMakeBalanced(s) {
    let countA = 0;
    let countB = 0;

    // Count the occurrences of 'a' and 'b'
    for (let char of s) {
        if (char === 'a'