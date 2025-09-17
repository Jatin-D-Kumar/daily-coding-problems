
function convertTime(current, correct) {
    // Convert current and correct time to minutes from 00:00
    const currentTimeParts = current.split(':').map(Number);
    const correctTimeParts = correct.split(':').map(Number);
    
    const currentMinutes = currentTimeParts[0] * 60 + currentTimeParts[1];
    const correctMinutes = correctTimeParts[0] * 60 + correctTimeParts[1];
    
    // Calculate the difference in minutes
    let difference = correctMinutes - currentMinutes;
    
    // If the 