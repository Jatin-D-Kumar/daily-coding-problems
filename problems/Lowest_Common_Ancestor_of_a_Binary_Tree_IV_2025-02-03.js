
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function lowestCommonAncestor(root, nodes) {
    const nodeSet = new Set(nodes);
    
    function dfs(node) {
        if (!node) return null;

        // If the current node is one of the nodes we're looking for
        if (nodeSet.has(node.val)) {
            return node;
    