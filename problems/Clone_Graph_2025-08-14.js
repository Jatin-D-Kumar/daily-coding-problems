
class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

function cloneGraph(node) {
    if (!node) return null; // If the input node is null, return null

    const visited = new Map(); // Map to keep track of the visited nodes

    function dfs(currentNode) {
        if (visited.has(currentNode)) {
            return visited.get(currentNode); // Return the cloned node if it’s already visited
        }

        // Create a new node for the current node
        const cloneNode = new Node(currentNode.val);
        visited.set(currentNode, cloneNode); // Mark this node as visited

        // Iterate through the neighbors of the current node
        for (const neighbor of currentNode.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor)); // Recursively clone the neighbors
        }

        return cloneNode; // Return the cloned node
    }

    return dfs(node); // Start DFS from the input node
}

// Example of usage
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.pus