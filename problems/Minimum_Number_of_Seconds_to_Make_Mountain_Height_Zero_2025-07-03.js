
function minimumSecondsToMakeMountainHeightZero(mountains) {
    // Find the maximum height from the mountains
    let maxHeight = Math.max(...mountains);
    // Return the maximum height as it represents the required seconds
    return maxHeight;
}

// Example usage:
const mountains = [3, 2, 1, 4];
console.log(minimumSecondsToMakeMountainHeightZero(mountains)); // Output: 4
