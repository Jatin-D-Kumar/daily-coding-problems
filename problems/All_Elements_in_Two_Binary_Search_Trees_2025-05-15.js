
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function getAllElements(root1, root2) {
    const elements1 = [];
    const elements2 = [];

    // Helper function to perform in-order traversal
    function inOrderTraversal(node, elements) {
        if (!node) return;
        inOrderTraversal(node.left, elements);
        elements.push(node.val);
        inOrderTraversal(node.right, elements);
    }

    // Get elements from both trees
    inOrderTraversal(root1, elements1);
    inOrderTraversal(root2, elements2);

    // Merge the two sorted arrays
    return mergeSortedArrays(elements1, elements2);
}

// Helper function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
