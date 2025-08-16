
function airplaneSeatProbability(numPassengers) {
    // If there is only one passenger, they will always sit in their assigned seat
    if (numPassengers === 1) {
        return 1;
    }
    // For more than one passenger, the probability that the last passenger sits in their assigned seat is always 