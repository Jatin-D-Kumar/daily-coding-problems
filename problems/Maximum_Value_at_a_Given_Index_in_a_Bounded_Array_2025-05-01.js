
function maxValue(n, index, maxValue) {
    // Binary search for the max value at array[index]
    let left = 1, right = maxValue;
    
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        
        // Calculate the total count of elements we can create with mid at index
        const count = countElements(n, index, mid);
        
        // If we can create the array with this mid value at index
        // we should try for a larger value, we move our left pointer
        if (count <= n) {
            left = mid; // mid can be the value at array[index]
        } else {
            right = mid - 1; // mid too large
        }
    }

    return left;
}

// Function to calculate the number of elements we can accommodate with v