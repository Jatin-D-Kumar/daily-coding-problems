
function maxHeightOfTriangle(points) {
    let maxHeight = 0;

    // Helper function to calculate the area of a triangle given by 3 points
    function area(x1, y1, x2, y2, x3, y3) {
        return Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
    }

    const n = points.length;

    // Iterate through all combinations of three points
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for 