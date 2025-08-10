
function findBinarySearchableNumbers(arr) {
    const n = arr.length;
    const leftMax = new Array(n).fill(-Infinity);
    const rightMin = new Array(n).fill(Infinity);
    const result = [];

    /