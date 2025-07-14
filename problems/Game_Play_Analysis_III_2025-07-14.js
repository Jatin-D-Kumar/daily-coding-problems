
function countPlayersAboveThreshold(scores, threshold) {
    // Initialize a counter for players above the threshold
    let count = 0;

    // Iterate through the scores array
    for (let score of scores) {
        // Check if the current score is greater than the threshold
        if (score > threshold) {
            count++;
        }
    }

    // Return the count of players above the threshold
    return count;
}

// Example usage:
const gameScores = [100, 200, 150, 300, 250];
const threshold = 200