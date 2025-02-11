
function countPoints(points, queries) {
    const results = [];

    for (const [xq, yq, rq] of queries) {
        let count = 0;
        for (const [xp, yp] of points) {
            // Calculate the squared distance from the point to the circle's center
            const distanceSquared = (xp - xq) ** 2 + (yp - yq) ** 2;
            // Compare with the squared radius
            if (distanceSquared <= rq ** 2) {
                count++;
            }
        }
        results.push(count);
    }

    return results;
}

// Examp