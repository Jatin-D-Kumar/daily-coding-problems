
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, value) {
        this.adjacencyList[vertex1].push({ node: vertex2, value });
        this.adjacencyList[vertex2].push({ node: vertex1, value });
    }

    // Method to find the maximum edge value sum
    maxEdgeSum() {
        let visited = new Set();
        let maxSum = 0;

        const dfs = (node, currentSum) => {
            visited.add(node);

            for (let neighbor of this.adjacencyList[node]) {
                if (!visited.has(neighbor.node)) {
                    currentSum += neighbor.value; // Add the edge value
                    maxSum = Math.max(maxSum, currentSum);
                    dfs(neighbor.node, currentSum);
                    currentSum -= neighbor.value; // Backtrack
                }
            }
            visited.delete(node);
        };

        // Start DFS from each vertex to cover all possible trees
        for (let vertex in this.adjacencyList) {
            if (!visited.has(vertex)) {
                dfs(vertex, 0);
            }
        }

        return maxSum;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B', 3);
gr