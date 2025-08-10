
function findBinarySearchableNumbers(arr) {
    const n = arr.length;
    const leftMax = new Array(n).fill(-Infinity);
    const rightMin = new Array(n).fill(Infinity);
    const result = [];

    // Fill leftMax array
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            leftMax[i] = Math.max(leftMax[i - 1], arr[i - 1]);
        }
    }

    // Fill rightMin array
    for (let i = n - 1; i >= 0; i--) {
        if (i < n - 1) {
            rightMin[i] = Math.min(rightMin[i + 1], arr[i + 1]);
        }
    }

    // Find binary searchable numbers
    for (let i = 0; i < n; i++) {
        if (arr[i] > leftMax[i] && arr[i] < rightMin[i]) {
            result.push(arr[i]);
       