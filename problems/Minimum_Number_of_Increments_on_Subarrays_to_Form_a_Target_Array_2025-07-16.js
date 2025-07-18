
function minIncrements(target) {
    let increments = 0;
    let currentMax = 0;

    for (let i = 0; i < target.length; i++) {
        // Calculate the difference between the current target value and the current max
        if (target[i] > currentMax) {
            increments += target[i] - currentMax; // Increment the total increments
            currentMax = target[i]; // Update the current max
        }
    }

    return increments;
}

// Example usage:
const targetArray = [1, 2, 3, 2, 1];
console.log(minIncrements(targetArray)); // Output: 3
