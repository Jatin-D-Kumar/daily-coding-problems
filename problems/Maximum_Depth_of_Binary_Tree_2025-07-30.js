
// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    // Base case: if the tree is empty, the depth is 0
    if (root === null) {
        return 0;
    }
    
    // Recursively find the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // The maximum depth is the greater of the two depths plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example 