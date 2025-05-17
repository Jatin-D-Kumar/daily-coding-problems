
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countPairs(root, distance) {
    let count = 0;

    function dfs(node) {
        if (!node) return [];

        // Ge