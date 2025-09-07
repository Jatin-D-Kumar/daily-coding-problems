
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var goodNodes = function(root) {
    let count = 0;

    const dfs = (node, maxSoFar) => {
        if (!node) return;

        // If the current node's value is greater than or equal to the maximum seen so far,
        // it is a good node.
        if (node.val >= maxSoFar) {
            count++;
            maxSoFar = node.val;
        }

        // Recurse for left and right children with updated maxSoFar
        dfs(node.left, maxSoFar);
        dfs(node.right, maxSoFar);
    };

    dfs(root, -Infinity); // Start with negative infinity since any node will be greater

    return count;
};

// Example usage:
let root = new TreeNode(3, 
    new TreeNode(1, 
        new TreeNode(3, null, null), 
        new TreeNode(2, null, null)
    ), 
    new TreeNode(4, 
        new TreeNode(1, null, null), 
        new TreeNode(5, null, null)
    )
);

console.log(goodNodes(root)); // Output: 4
