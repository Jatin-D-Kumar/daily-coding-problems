
function minimumDistanceToTarget(arr, target) {
    let lastIndex = -1;
    let minDistance = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            if (lastIndex !== -1) {
                // Calculate the distance to the last occurrence
                const distance = i - lastIndex;
                // Update the minimum distance if this one is smaller
                minDistance = Math.min(minDistance, distance);
            }
            // Update the last occurrence index to the current index
            lastIndex = i;
        }
    }

    // Return -1 if no target was found or if it occurs only once
    return minDistance === Infinity ? -1 : minDistance;
}

// Example usage:
const arr = [1, 2, 3, 2, 5, 3, 2, 1];
const target = 2;
const result = minimumDistanceToTarget(arr, target);
console.log(result); // Expected output: 3 (from index 3 to index 6)
