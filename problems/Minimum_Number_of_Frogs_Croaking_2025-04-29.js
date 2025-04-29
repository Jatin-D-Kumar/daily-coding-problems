
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
            maxFrog