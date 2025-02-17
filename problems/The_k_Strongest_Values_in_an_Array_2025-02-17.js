
function getStrongest(arr, k) {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);
    
    // Step 2: Find the median
    const n = arr.length;
    const median = n % 2 === 0 ? (arr[n / 2 - 1] + arr[n / 2]) / 2 : arr[Math.floor(n / 2)];
    
    // Step 3: Create an array of strengths
    const strengths = arr.map(value => ({
        value: value,
        strength: Math.abs(value - median)
    }));
    
    // Step 4: Sort by strength and then by value
    strengths.sort((a, b) => {
        if (b.strength === a.strength) {
            return b.value - a.value; // Sort by value in descending order if strengths are equal
        }
        return b.strength - a.strength; // Sort by strength in descending order
    });
    
    // Step 5: Extract the top k strongest values
    return st