
function timeToCrossDoor(width, speed) {
    // Check if speed is zero to avoid division by zero
    if (speed <= 0) {
        return "Speed must be greater than zero.";
    }
    
    // Calculate time taken to cross the door
    const time = w