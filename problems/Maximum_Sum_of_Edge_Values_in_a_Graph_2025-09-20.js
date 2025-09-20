
function maximumSumOfEdgeValues(edges) {
    let maxSum = 0;

    for (let edge of edges) {
        // Assume each edge is an object like {u: vertex1, v: vertex2, weight: edgeWe