
function minReorder(n, connections) {
    // Create an adjacency list to represent the graph
    const graph = new Map();
    
    // Populate the graph with the connections
    for (const [a, b] of connections) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push([b, 1]); // 1 indicates the route needs to be reversed
        graph.get(b).push([a, 0]); // 0 indicates the route is already correct
    }

    // DFS function to count the number of routes to reverse
    const dfs = (node, visited) => {
        visited.add(node);
        let count = 0;

        for (const [neighbor, needsReversal] of graph.get(node)) {
            if (!visited.has(neighbor)) {
                count += needsReversal; // Add to count if the route needs to be reversed
                count += dfs(neighbor, visited); // Recur for the neighbor
            }
        }

        return count;
    };

    // Start DFS from city 0
    const visited = new Set();
    return dfs(0, visited);
}

// Example usag