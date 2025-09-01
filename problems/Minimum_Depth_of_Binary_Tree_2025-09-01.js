
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

    // Initialize a queue for BFS
    const queue = [];
    queue.push(root);
    let depth = 1;

    // Start BFS
    while (queue.length > 0) {
    