
function tossStrangeCoins(n, p) {
    const results = [];
    
    for (let i = 0; i < n; i++) {
        // Generate a random number between 0 and 1
        const randomValue = Math.random();
        
        // If the random value is less than p, it's heads; otherwise, it's tails
        if (randomValue < p) {
            results.push('H'); // Heads
        } else {
            results.push('T'); // Tails
        }
    }
    
    return results;
}

// Example usage:
const numberOfTosses = 10; // Nu