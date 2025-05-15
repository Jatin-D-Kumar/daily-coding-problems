
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function getAllElements(root1, root2) {
    const elements1 = [];
    const elements2 = [];

    // Helper function to perform in-order traversal
    function inOrderTraversal(node, elements) {
        if (!node) return;
        inOrderTrave