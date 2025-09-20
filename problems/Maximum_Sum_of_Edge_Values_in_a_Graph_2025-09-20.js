
function maximumSumOfEdgeValues(edges) {
    let maxSum = 0;

    for (let edge of edges) {
        // Assume each edge is an object like {u: vertex1, v: vertex2, weight: edgeWeight}
        const { weight } = edge;
        maxSum += weight;  // Accumulate the weight of the edge
    }

    return maxSum;
}

// Example usage:
const edges = [
    { u: 1, v: 2, weight: 4 },
    { u: 2, v: 3, weight: 6 },
    { u: 1, v: 3, weight: 1 },
    { u: 3, v: 4, weight: 5 }
];

console.log(maximumSumOfEdgeValues(edges)); // Output: 16
