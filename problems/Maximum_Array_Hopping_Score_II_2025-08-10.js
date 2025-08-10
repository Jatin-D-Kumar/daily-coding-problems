
function maxHoppingScore(arr) {
    const n = arr.length;
    if (n === 0) return 0;
    if (n === 1) return arr[0];
    if (n === 2) r