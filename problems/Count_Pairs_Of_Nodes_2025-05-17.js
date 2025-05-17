
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

        // Get the distances from the left and right subtrees
        const leftDistances = dfs(node.left);
        const rightDistances = dfs(node.right);

        // Count pairs between left and right subtrees
        for (let l of leftDistances) {
            for (let r of rightDistances) {
                if (l + r + 2 <= distance) {
                    count++;
                }
            }
        }

        // Increment distances for the current node
        const currentDistances = leftDistances.map(d => d + 1).concat