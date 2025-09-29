
function maxActivationTotal(values) {
    // Sort the array in descending order
    values.sort((a, b) => b - a);
    
    let total = 0;
    
    for (let i = 0; i < values.length; i++) {
        // Add the current value to the total
        total += values[i];
        
        // Reduce all subsequent values that are less than current value by 1
        for (let j = i + 1; j < values.length; j++) {
            if (values[j] < values[i]) {
                values[j] = Math.max(values[j] - 1, 0);
            }
        }
    }
    
    return total;
}
