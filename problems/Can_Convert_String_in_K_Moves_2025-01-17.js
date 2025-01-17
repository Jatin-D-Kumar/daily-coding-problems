
function canConvertString(s1, s2, k) {
    // Check if the lengths of the strings are the same
    if (s1.length !== s2.length) {
        return false;
    }

    let movesNeeded = 0;

    // Calculate the number of moves needed
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !