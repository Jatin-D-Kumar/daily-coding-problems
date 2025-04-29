
function minNumberOfFrogs(croakOfFrogs) {
    const croak = 'croak';
    const croakCount = new Array(5).fill(0); // to count 'c', 'r', 'o', 'a', 'k'
    let frogs = 0; // current frogs croaking
    let maxFrogs = 0; // maximum frogs needed at any time

    for (let char of croa