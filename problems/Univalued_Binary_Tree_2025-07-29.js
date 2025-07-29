
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isUnivalTree(root) {
    if (!root) return true; // An empty tree is c