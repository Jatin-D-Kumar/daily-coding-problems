
function maxContainers(weights, capacity) {
    // Sort the weights in ascending order
    weights.sort((a, b) => a - b);
    
    let totalWeight = 0;
    let count = 0;

    // Iterate through the sorted weights
    for (let weight of weights) {
        // Check if adding the current weight exceeds the capacity
        if (totalWeight + weight <= capacity) {
            totalWeight += weight; // Add the weight to the total
            count++; // Increment the count of containers
        } else {
            break; // Stop if we exceed the capacity
        }
    }

    return count; // Return the maximum number of containers
}

// Example usage:
const containerWeights = [1, 2, 3, 4, 5];
const shipCapacity = 7;
console.log(maxContainers(containerWeights, shipCapacity)); // Output: 3
