
function minReorder(n, connections) {
    // Create an adjacency list to represent the graph
    const graph = new Map();
    
    // Populate the graph with the connections
    for (const [a, b] of connections) {
        if (!graph.has(a)) graph.set(a, []);
    