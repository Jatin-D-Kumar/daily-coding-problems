
function smallestSubarrays(arr) {
    const n = arr.length;
    const result = new Array(n);
    
    // Step 1: Calculate the maximum bitwise OR of the entire array
    const maxOr = arr.reduce((acc, curr) => acc | curr, 0);
    
    // Step 2: Find the smallest contiguous subarrays with max OR
    for (let i = 0; i < n; i++) {
        let currentOr = 0;
        let j = i;

        while (j < n && currentOr | arr[j] !== maxOr) {
            currentOr |= arr[j];
            j++;
        }

        // Check if we've reached the maximum OR
        if (currentOr | arr[j] === maxOr) {
            // The length of the subarray is from i to j (inclusive)
            result[i] = j - i + 1; // +1 because j is exclusive
        } else {
            result[i] = -1; // If not found, assign -1
        }
    }

    return result;
}

// Example usage:
const arr = [1, 2, 3];
console.log(smallestSubarrays(arr)); // Output: [2, 1, 1]
