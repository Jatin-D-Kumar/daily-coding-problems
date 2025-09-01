
// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function minDepth(root) {
    // Edge case: if the tree is empty
    if (!root) return 0;

    // Initialize a queue for BFS
    const queue = [];
    queue.push(root);
    let depth = 1;

    // Start BFS
    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // Check if we've reached a leaf node
            if (!node.left && !node.right) {
                return depth; // Return the depth as we found a leaf
            }

            // Add left and right children to the queue if they exist
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Increment the depth at the end of each level
        depth++;
    }

    return depth; // Should never reach here since we return when we find the first leaf
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(minDepth(root)); // Output: 2 (the minimum depth is to node 3)
