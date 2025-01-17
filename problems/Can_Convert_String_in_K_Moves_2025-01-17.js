
function canConvertString(s1, s2, k) {
    // Check if the lengths of the strings are the same
    if (s1.length !== s2.length) {
        return false;
    }

    let movesNeeded = 0;

    // Calculate the number of moves needed
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            movesNeeded++;
        }
    }

    // Check if we can convert within k moves
    return movesNeeded <= k && (k - movesNeeded) % 2 === 0;
}

// Example usage:
const s1 = "abc";
const s2 = "bcd";
const k = 3;

console.log(canConvertString(s1, s2, k)); // Output: true
