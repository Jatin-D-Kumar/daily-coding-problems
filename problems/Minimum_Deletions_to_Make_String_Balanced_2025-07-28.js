
function minDeletionsToMakeBalanced(s) {
    let countA = 0;
    let countB = 0;

    // Count the occurrences of 'a' and 'b'
    for (let char of s) {
        if (char === 'a') {
            countA++;
        } else if (char === 'b') {
            countB++;
        }
    }

    // Calculate the minimum deletions required
    return Math.abs(countA - countB);
}

// Example usage:
const str = "aababb";
console.log(minDeletionsToMakeBalanced(str)); // Output: 1
