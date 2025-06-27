
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root]; // Initialize the queue with the root node
    
    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        const currentLevel = []; // Array to hold values of the current level
        
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Dequeue the front node
            currentLevel.push(currentNode.val); // Add its value to the current level
            
            // Enqueue child nodes
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        
        // Add the current level to the result
        result.push(currentLevel);
    }
    
    return result;
}

// Example usage:
const root =