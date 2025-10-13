
function replaceElements(arr) {
    let maxRight = -1; // Initialize the maxRight variable to -1 (for the last element)
    
    // Iterate through the array in reverse order
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i]; // Store the current element
        arr[i] = maxRight;    // Replace the current element with maxRight
        maxRight = Math.max(maxRight, current); // Update maxRight to be the greater of maxRight or the current element
    }
    
    return arr;
}

// Example usage:
co