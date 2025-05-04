
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

    // Initialize the number of horizontal and vertical pieces (initially there is one piece)
    let horizontalPieces = 1;
    let verticalPieces = 1;

    // Iterate until we run out of cuts
    while (hi >= 0 || vi >= 0) {
        // Determine the next cut to make
        let horizontalCost = hi >= 0 ? horizontalCuts[hi] : Infinity;
        let verticalCost = vi >= 0 ? verticalCuts[vi] : Infinity;

        // Choose the cheaper cut between horizontal and vertical
        if (horizontalCost <= verticalCost) {
            // If we make a horizontal cut
            totalCost += horizontalCost * verticalPieces;
            horizontalPieces++;
            hi--;
        } else {
            // If we make a vertical cut
            totalCost += verticalCost * horizontalPieces;
            verticalPieces++;
            vi--;
        }
    }

    return totalCost;
}

// Example usage:
const cuts = [1, 2, 3, 4, 5, 6]; // Example costs for horizontal and vertical cuts
const minCutCost = minCost(cuts);
console.log(`Minimum cost for cutting the cake: ${minCutCost}`);
