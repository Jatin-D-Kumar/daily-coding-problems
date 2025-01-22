
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
const numberOfTosses = 10; // Number of times to toss the coin
const probabilityOfHeads = 0.7; // Probability of getting heads
const tossResults = tossStrangeCoins(numberOfTosses, probabilityOfHeads);

console.log(tossResults);
