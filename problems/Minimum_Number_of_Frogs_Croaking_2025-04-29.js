
function minNumberOfFrogs(croakOfFrogs) {
    const croak = 'croak';
    const croakCount = new Array(5).fill(0); // to count 'c', 'r', 'o', 'a', 'k'
    let frogs = 0; // current frogs croaking
    let maxFrogs = 0; // maximum frogs needed at any time

    for (let char of croakOfFrogs) {
        const index = croak.indexOf(char);

        if (index === -1) {
            return -1; // Invalid character
        }

        // If it's the first character 'c', we start a new frog croaking
        if (char === 'c') {
            frogs++;
            maxFrogs = Math.max(maxFrogs, frogs);
        }

        // Increase the count for the current character
        croakCount[index]++;
        
        // Check if there's a corresponding previous character
        if (index > 0) {
            // If not enough previous character, return -1
            if (croakCount[index] > croakCount[index - 1]) {
                return -1; 
            }
        }

        // If it's the last character 'k', we finish one frog croaking
        if (char === 'k') {
            frogs--;
        }
    }

    // At the end, all frogs should have completed croaking
    return frogs === 0 ? maxFrogs : -1;
}

// Example usage:
console.log(minNumberOfFrogs("croakcroak")); // Output: 1
console.log(minNumberOfFrogs("croakcrook")); // Output: -1
console.log(minNumberOfFrogs("croakcroaacrroa")); // Output: -1
