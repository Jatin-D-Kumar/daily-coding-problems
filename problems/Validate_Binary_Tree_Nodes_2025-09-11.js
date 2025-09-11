
function validateBinaryTreeNodes(n, leftChild, rightChild) {
    // Array to keep track of the number of parents for each node
    const parentCount = new Array(n).fill(0);

    // Loop through all nodes to count parents
    for (let i = 0; i < n; i++) {
        // Check left child
        if (leftChild[i] !== -1) {
            parentCount[leftChild[i]]++