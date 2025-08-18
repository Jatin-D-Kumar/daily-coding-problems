
// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to perform in-order traversal of the BST.
const inOrderTraversal = (root, result) => {
    if (!root) return;
    inOrderTraversal(root.left, result);
    result.push(root.val);
    inOrderTraversal(root.right, result);
};

// Function to merge two sorted arrays.
const mergeSortedArrays = (arr1, arr2) => {
    const merge