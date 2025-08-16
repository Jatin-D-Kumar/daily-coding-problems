
function airplaneSeatProbability(numPassengers) {
    // If there is only one passenger, they will always sit in their assigned seat
    if (numPassengers === 1) {
        return 1;
    }
    // For more than one passenger, the probability that the last passenger sits in their assigned seat is always 0.5
    return 0.5;
}

// Example usage:
const numPassengers = 10; // You can change this number to test with different passenger counts
const probability = airplaneSeatProbability(numPassengers);
console.log(`The probability that the last passenger sits in their assigned seat is: ${probability}`);
