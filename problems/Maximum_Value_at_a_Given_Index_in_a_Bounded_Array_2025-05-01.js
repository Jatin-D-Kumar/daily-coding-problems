
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

// Function to calculate the number of elements we can accommodate with value
function countElements(n, index, value) {
    const leftCount = Math.max(0, value - 1); // Number of elements we can fill on the left
    const rightCount = Math.max(0, value - 1); // Number of elements we can fill on the right
    
    // Calculate how many indices we can fill on the left
    const leftFill = Math.min(leftCount, index);
    // Calculate how many indices we can fill on the right
    const rightFill = Math.min(rightCount, n - 1 - index);
    
    // Elements filled on the left and right
 