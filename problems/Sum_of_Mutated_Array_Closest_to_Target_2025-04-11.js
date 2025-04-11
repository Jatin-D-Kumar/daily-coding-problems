
function findBestValue(arr, target) {
    let left = 0;
    let right = Math.max(...arr);
    let bestValue = 0;
    let closestSum = Infinity;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentSum = arr.reduce((sum,