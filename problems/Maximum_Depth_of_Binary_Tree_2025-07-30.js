
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

// Example usage:
// Constructing a binary tree:
//        3
//       / \
//      9  20
//         /  \
//        15   7
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root)); // Output: 3
