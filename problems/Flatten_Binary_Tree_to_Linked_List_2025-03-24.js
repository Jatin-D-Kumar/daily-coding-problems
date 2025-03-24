
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
};

// Example usage:
// Constructing the binary tree:
//      1
//     / \
//    2   5
//   / \   \
//  3   4   6
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

// Flatten the binary tree
flatten(root);

// Function to print the f