
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

    