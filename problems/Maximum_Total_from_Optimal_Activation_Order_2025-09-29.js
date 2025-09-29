
function maxActivationTotal(values) {
    // Sort the array in descending order
    values.sort((a, b) => b - a);
    
    let total = 0;
    
    for (let i = 0; i < values.length; i++) {
        // Add the c