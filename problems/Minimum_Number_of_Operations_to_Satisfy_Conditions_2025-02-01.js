
function minOperations(arr) {
    // Calculate the average of the array
    const average = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    
    // Calculate the number of operations needed to make all elements equal to the average
    let operations = 0;
    for (let nu