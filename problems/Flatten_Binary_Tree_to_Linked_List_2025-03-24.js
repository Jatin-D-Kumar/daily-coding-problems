
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

    // Set the right child to the left subtree
    root.right = root.left;

    // Set the left child to null
    root.left = null;

    // Move to the end of the new right subtree to attach the original right subtree
    let current = root;
    while (current.right) {
        current = current.right;
    }

    // Attach the original right subtree
    current.right = rightSubtree;