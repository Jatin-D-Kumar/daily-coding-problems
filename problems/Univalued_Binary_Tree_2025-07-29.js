
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isUnivalTree(root) {
    if (!root) return true; // An empty tree is considered univalued

    // Helper function to check if the tree is univalued
    function checkUnival(node, value) {
        if (!node) return true; // Reached a leaf node
        if (node.val !== value) return false; // Value mismatch
        // Check left and right subtrees
        return checkUnival(node.left, value) && checkUnival(node.right, value);
    }

    // Start the check with the root's value
    return checkUnival(root, root.val);
}

// Example usage:
// Constructing a univalued binary tree
const root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(1);

console.log(isUnivalTree(root)); // Output: true
