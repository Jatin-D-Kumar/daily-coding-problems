
function readBinaryWatch(turnedOn) {
    const result = [];
    
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            // Count the number of 1s in the binary representation of hours and minutes
    