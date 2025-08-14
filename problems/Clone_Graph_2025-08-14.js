
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
        const cloneNode = new Node(currentN