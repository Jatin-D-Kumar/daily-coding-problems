
function rollDice() {
    // Generate a random integer between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}

// Example of rolling the dice multiple times
function simulateDiceRolls(numberOfRolls) {
    let results = [];
    
    for (let i = 0; i < numberOfRolls; i++) {
        results.push(rollDice());
    }
    
    return results;
}

// Simulate rolling the dice