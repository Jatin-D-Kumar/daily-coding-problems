
function minCost(cuts) {
    // Length of the array
    const n = cuts.length;

    // Sort the cuts array to handle them in a sorted manner
    cuts.sort((a, b) => a - b);

    // Create arrays to store horizontal and vertical cut costs
    let horizontalCuts = cuts.slice(0, n / 2);
    let verticalCuts = cuts.slice(n / 2);

    // Initialize the total cost
    let totalCost = 0;
    
    // pointers for horizontal and vertical segments
    let hi = horizontalCuts.length - 1;
    let vi = verticalCuts.length - 1;

    // Ini