
class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(root) {
    // Helper function to validate the BST with a range
    const validate = (node, low = -Infinity, high = Infinity) => {
        // An empty tree is a valid BST
        if (!node) {
            return true;
        }

        // Current 