
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function verticalOrder(root) {
    if (!root) return [];

    const columnTable = new Map();
    const queue = [[root, 0]]; // [node, columnIndex]
    let minColumn = 0;
    let maxColumn = 0;

    while (queue.length > 0) {
        const [node, column] = queue.shift();

        if (node) {
            // Add the node value to the corresponding column
            if (!columnTa