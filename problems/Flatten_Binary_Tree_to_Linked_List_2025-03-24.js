
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var flatten = function(root) {
    if (!root) return;

    // Flatten left and right subtrees
    flatten(root.left);
    flatten(root.right);
    
    // Store the right subtree
    const rightSubtree = root.right;

    