
function convertTime(current, correct) {
    // Convert current and correct time to minutes from 00:00
    const currentTimeParts = current.split(':').map(Number);
    const correctTimeParts = correct.split(':').map(Number);
    
    const currentMin