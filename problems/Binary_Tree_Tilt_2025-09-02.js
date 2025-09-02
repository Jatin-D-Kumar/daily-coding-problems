
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findTilt(root) {
    let totalTilt = 0;

    function sumAndTilt(node) {
        if (!node) return 0;

        // Recursively get the sum of values in the left an