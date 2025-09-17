
function convertTime(current, correct) {
    // Convert current and correct time to minutes from 00:00
    const currentTimeParts = current.split(':').map(Number);
    const correctTimeParts = correct.split(':').map(Number);
    
    const currentMinutes = currentTimeParts[0] * 60 + currentTimeParts[1];
    const correctMinutes = correctTimeParts[0] * 60 + correctTimeParts[1];
    
    // Calculate the difference in minutes
    let difference = correctMinutes - currentMinutes;
    
    // If the difference is negative, it means we wrap around the next day
    if (difference < 0) {
        difference += 24 * 60; // Add 1440 minutes (24 hours)
    }
    
    // Operations we can use: 60 minutes, 15 minutes, 5 minutes, and 1 minute
    const operations = [60, 15, 5, 1];
    let count = 0;

    // Calculate the minimum number of operations
    for (const op of operations) {
        count += Math.floor(difference / op); // Number of operations for that op
        difference %= op; // Remainder