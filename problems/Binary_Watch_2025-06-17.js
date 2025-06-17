
function readBinaryWatch(turnedOn) {
    const result = [];
    
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            // Count the number of 1s in the binary representation of hours and minutes
            const count = countBits(h) + countBits(m);
            if (count === turnedOn) {
                // Format the time as "h:mm"
                result.push(`${h}:${m < 10 ? '0' : ''}${m}`);
            }
        }
    }
    
    return result;
}

function countBits(num) {
    let count = 0;
    while (num) {
        count += num & 1; // Increment count if the last bit is 1
        num >>= 1; // Right shift to process the next bit
    }
    return count;
