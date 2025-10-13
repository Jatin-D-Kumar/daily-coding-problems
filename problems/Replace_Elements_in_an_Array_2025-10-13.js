
function replaceElements(arr) {
    let maxRight = -1; // Initialize the maxRight variable to -1 (for the last element)
    
    // Iterate through the array in reverse order
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i]; // Store t