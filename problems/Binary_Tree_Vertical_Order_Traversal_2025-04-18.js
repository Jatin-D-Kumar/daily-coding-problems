
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
            if (!columnTable.has(column)) {
                columnTable.set(column, []);
            }
            columnTable.get(column).push(node.val);

            // Update the min and max column indices
            minColumn = Math.min(minColumn, column);
            maxColumn = Math.max(maxColumn, column);

            // Add the left and right children to the queue with updated column indices
            queue.push([node.left, column - 1]);
            queue.push([node.right, column + 1]);
        }
    }

    // Prepare the result array
    const result = [];
    for (let i = minColumn; i <= maxColumn; i++) {
        if (columnTable.has(i)) {
            result.push(columnTable.get(i));
        }
    }

    return result;
}

// Example usage:
// Constructing a binary tree:
//        3
//       / \
//      9  20
//         /  \
//        15   7
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(verticalOrder(root)); // Output: [[9], [3, 15], [20], [7]]
