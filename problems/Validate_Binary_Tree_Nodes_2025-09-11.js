
function validateBinaryTreeNodes(n, leftChild, rightChild) {
    // Array to keep track of the number of parents for each node
    const parentCount = new Array(n).fill(0);

    // Loop through all nodes to count parents
    for (let i = 0; i < n; i++) {
        // Check left child
        if (leftChild[i] !== -1) {
            parentCount[leftChild[i]]++;
            // If a node has more than one parent, return false
            if (parentCount[leftChild[i]] > 1) {
                return false;
            }
        }
        
        // Check right child
        if (rightChild[i] !== -1) {
            parentCount[rightChild[i]]++;
            // If a node has more than one parent, return false
         