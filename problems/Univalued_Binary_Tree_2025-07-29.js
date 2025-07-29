
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
        if (node.val !== value) r