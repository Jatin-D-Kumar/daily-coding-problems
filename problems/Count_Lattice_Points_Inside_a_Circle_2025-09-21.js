
function countLatticePoints(xCenter, yCenter, radius) {
    let count = 0;
    
    // Calculate the square of the radius for comparison
    const radiusSquared = radius * radius;
    
    // Iterate through all integer points within the bounding box
    fo