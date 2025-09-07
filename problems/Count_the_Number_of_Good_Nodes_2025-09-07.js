
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var goodNodes = function(root) {
    let count = 0;

    const dfs = (node, maxSoFar) => {
        if (!node) return;

        // If the current node's value is greater 