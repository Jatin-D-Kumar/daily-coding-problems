
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
        const currentDistances = leftDistances.map(d => d + 1).concat(rightDistances.map(d => d + 1));
        currentDistances.push(1); // Include the current node itself

        return currentDistances;
    }

    dfs(root);
    return count;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const distance = 3;
console.log(countPairs(root, distance)); // Output the number of pairs
