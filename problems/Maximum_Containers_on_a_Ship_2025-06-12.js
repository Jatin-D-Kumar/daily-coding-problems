
function maxContainers(weights, capacity) {
    // Sort the weights in ascending order
    weights.sort((a, b) => a - b);
    
    let totalWeight = 0;
    let count = 0;

    // Iterate through the sorted weights
    for (let 