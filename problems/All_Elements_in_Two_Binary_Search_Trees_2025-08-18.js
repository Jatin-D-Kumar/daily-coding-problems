
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
    const merged = [];
    let i = 0, j = 0;

    // Merge both arrays in sorted order.
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1.
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2.
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
};

// Main function to return all elements in two BSTs.
const getAllElements = function(root1, root2) {
    const elements1 = [];
    const elements2 = [];
    
    // Get elements from both trees using in-order traversal.
    inOrderTraversal(root1, elements1);
    inOrderTraversal(root2, elements2);

    // Merge the two sorted arrays and return the result.
    return mergeSortedArrays(elements1, elements2);
};

// Example usage:
// Create two binary search trees for testing
let root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(4);

let root2 = new TreeNode(1);
root2.right = new TreeNode(3);

// Get all elements from both BSTs:
const result = getAllElements(root1, root2);
console.log(result); // Output: [1, 1, 2, 3, 4]
