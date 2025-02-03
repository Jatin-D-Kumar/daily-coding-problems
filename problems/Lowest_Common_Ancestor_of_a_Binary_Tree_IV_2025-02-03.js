
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
        }

        // Search in the left and right subtrees
        const left = dfs(node.left);
        const right = dfs(node.right);

        // If both left and right are not null, this node is the LCA
        if (left && right) {
            return node;
        }

        // Otherwise return the non-null child
        return left ? left : right;
    }

    return dfs(root);
}

// Example usage:
// Constructing a binary tree
//         3
//        / \
//       5   1
//      / \ / \
//     6  2 0  8
//       / \
//      7   4

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

const nodes = [5, 1, 4]; // Example nodes to find LCA
const lca = lowestCommonAncestor(root, nodes);
console.log(lca ? lca.val : null); // Output the value of the LCA
