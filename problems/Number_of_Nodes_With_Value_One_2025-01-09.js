
// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function countNodesWithValueOne(root) {
    if (root === null) {
        return 0; // Base case: if the node is null, return 0
    }

    // Count the current node if its value is 1
    let count = (root.val === 1) ? 1 : 0;

    // Recursively count in the left and right subtrees
    count += countNodesWithValueOne(root.left);
    count += countNodesWithValueOne(root.right);

    return count; // Return the total count
}

// Example usage:
// Constructing a binary tree:
//        1
//       / \
//      0   1
//     / \   \
//    1   0   1
const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(0);
root.right.right = new TreeNode(1);

console.log(countNodesWithValueOne(root)); // Output: 4
