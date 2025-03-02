
function findNthValueAfterKSeconds(startValue, increment, n, k) {
    // Calculate the N-th value after K seconds
    // Assuming `k` seconds adds an increment to the value each second
    let finalValue = startValue + (increment * k);
    
    // For simplicity, we assume the N-th value is just the incremented value
    for (let i = 1; i < n; i++) {
        finalValue += increment; // Continue applying the increment for N elements
    }
    
    return finalValue;
}

// Example usage:
const startValue = 5; // Starting value of the sequence
const increment = 3;   // Increment value added each second
const n = 4;          // We're interested in the 4th value
const k = 5;          // After 5 seconds

console.log(findNthValueAfterKSeconds(startValue, increment, n, k)); // Output: 26
