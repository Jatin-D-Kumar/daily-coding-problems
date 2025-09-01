
// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function minDepth(root) {
    // Edge case: if the tree is empty
    if (!root) return 0;

    