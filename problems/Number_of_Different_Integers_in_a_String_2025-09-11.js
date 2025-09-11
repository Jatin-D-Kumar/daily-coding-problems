
function numDifferentIntegers(word) {
    const uniqueIntegers = new Set();
    let currentNumber = '';

    for (let char of word) {
        // If the character is a digit, append it to the current number
        if (char >= '0' && char <= '9') {
            currentNumber += char;
        } else {
            // If we hit a non-digit and we have a current number, process it
            if (currentNumber) {
                // Parse as int and add to the set (leading zeros are ignored)
                uniqueIntegers.add(parseInt(currentNumber, 10));
                currentNumber = ''; // Reset for the next number
            }
        }
    }

    // If the string ends with a number, we need to add it as well
    if (currentNumber) {
        uniqueIntegers.add(par