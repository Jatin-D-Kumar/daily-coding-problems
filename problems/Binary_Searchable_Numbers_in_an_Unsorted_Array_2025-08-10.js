
function findBinarySearchableNumbers(arr) {
    const n = arr.length;
    const leftMax = new Array(n).fill(-Infinity);
    const rightMin = new Array(n).fill(Infinity);
    const result = [];

    // Fill leftMax array
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            leftMax[i] =