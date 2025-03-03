
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
            for (let k = j + 1; k < n; k++) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];

                // Calculate base length
                const base = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); // distance between points (x1, y1) and (x2, y2)

                // Calculate area
                const A = area(x1, y1, x2, y2, x3, y3);

                // Calculate height (if base is not zero)
                if (base > 0) {
                    const height = (2 * A) / base;
                    // Update maxHeight if this height is greater
                    maxHeight = Math.max(maxHeight, height);
                }
            }
        }
    }

    return maxHeight;
}

// Example usage:
const points = [[0, 0], [4, 0], [2, 4], [1, 2]];
console.log(maxHeightOfTriangle(points)); // Output the maximum height
