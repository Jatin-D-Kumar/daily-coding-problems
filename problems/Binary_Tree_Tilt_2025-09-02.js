
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

        // Recursively get the sum of values in the left and right subtrees
        const leftSum = sumAndTilt(node.left);
        const rightSum = sumAndTilt(node.right);

        // Calculate the tilt for the current node
        const tilt = Math.abs(leftSum - rightSum);
        totalTilt += tilt; // Add the current tilt to the total tilt

        // Return the sum of the values of this subtree
        return leftSum + rightSum + node.val;
    }

    sumAndTilt(root); // Start the recursion
    return totalTilt; // Return the total tilt of the tree
}

// Example usage:
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(findTilt(root)); // Output the total tilt of the binary tree
