
function countLatticePoints(xCenter, yCenter, radius) {
    let count = 0;
    
    // Calculate the square of the radius for comparison
    const radiusSquared = radius * radius;
    
    // Iterate through all integer points within the bounding box
    for (let x = xCenter - radius; x <= xCenter + radius; x++) {
        for (let y = yCenter - radius; y <= yCenter + radius; y++) {
            // Check if the point is inside the circle
            if ((x - xCenter) * (x - xCenter) + (y - yCenter) * (y - yCenter) < radiusSquared) {
                count++;
            }
        }
    }
    
    return count;
}

// Example usage:
const xCenter = 0;
const yCenter = 0;
const radius = 1;
console.log(countLatticePoints(xCenter, yCenter, radius)); // Output should be 5
