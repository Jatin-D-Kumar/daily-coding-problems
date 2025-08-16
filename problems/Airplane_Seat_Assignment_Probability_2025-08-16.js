
function airplaneSeatProbability(numPassengers) {
    // If there is only one passenger, they will always sit in their assigned seat
    if (numPassengers === 1) {
        return 1;
    }
    // For mo