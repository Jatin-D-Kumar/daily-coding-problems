
function maxBuilding(n, restrictions) {
    // Include the endpoints
    restrictions.push([0, 0]);
    restrictions.push([n, 0]);
    
    // Sort restrictions by position
    restrictions.sort((a, b) => a[0] - b[0]);

    let m = restrictions.length;
    // Propagate height constraints from left to right
    for (let i = 1; i < m; i++) {
        const [x1, h1] = restrictions[i - 1];
        const [x2, h2] = restrictions[i];
        
        // Calculate the maximum allowed height at x2
        const maxH = h1 + ((x2 - x1) - (h1 - h2)) / 2;
        restrictions[i][1] = Math.min(h2, maxH);
    }

    // Propagate height constraints from right to left
    for (let i = m - 2; i >= 0; i--) {
        const [x1, h1] = restrictions[i + 1];
        const [x2, h2] = restrictions[i];
        
        // Calculate the maximum allowed height at x2
        const maxH = h1 + ((x1 - x2) - (h1 - h2)) / 2;
        restrictions[i][1] = Math.min(h2, maxH);
    }

    // Now calculate the max height possible between consecutive restrictions
    let maxHeight = 0;
    for (let i = 0; i < m - 1; i++) {
        const [x1, h1] = restrictions[i];
        const [x2, h2] = restrictions[i + 1];

        // The highest point between x1 and x2 is influenced by the two building heights
        const possibleHeight = Math.floor((h1 + h2 + (x2 - x1)) / 2);
        maxHeight = Math.max(maxHeight, possibleHeight);
    }
    
    return maxHeight;
}

// Example usage
const n = 5;
const restrictions = [[2, 1], [4, 1]];
console.log(maxBuilding(n, restrictions)); // Output will depend on restrictions
