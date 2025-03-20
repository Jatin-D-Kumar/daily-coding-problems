
function countPlayersAboveTarget(scores, target) {
    let count = 0;  // Initialize a counter for players above target

    for (let score of scores) {  // Loop through each score in the scores array
        if (score >= target) {    // Check if the score is greater than or equal to target
            count++;              // Increment the counter
        }
    }

    return count;  // Return the total count of players who met or exceeded the target
}

// Example usage
const scores = [100, 150, 200, 250];
con