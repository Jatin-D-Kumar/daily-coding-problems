
function furthestPoint(points) {
    let maxDistance = -1; // Initialize max distance
    let furthestPoint = null; // To store the furthest point

    for (let point of points) {
        // Calculate the distance from the origin (0, 0)
        const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);
        
        // Check if this distance is greater than the current max distance
        if (distance > maxDistance) {
            maxDistance = distance; // Update max distance