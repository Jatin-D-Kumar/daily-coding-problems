
class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

function cloneGraph(node) {
    if (!node) return null; // If the input node is null, return null

    const visited = new Map(); // Map to keep track of the vis