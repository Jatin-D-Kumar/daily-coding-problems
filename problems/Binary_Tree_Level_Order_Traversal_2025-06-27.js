
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
        const levelSize = queue.length; // Number of nodes at the current leve