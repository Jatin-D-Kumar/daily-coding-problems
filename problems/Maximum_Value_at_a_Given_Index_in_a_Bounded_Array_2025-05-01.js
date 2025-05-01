
function maxValue(n, index, maxValue) {
    // Binary search for the max value at array[index]
    let left = 1, right = maxValue;
    
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        
        // Calculate the tot