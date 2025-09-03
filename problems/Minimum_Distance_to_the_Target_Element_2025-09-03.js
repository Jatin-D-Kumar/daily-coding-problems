
function minimumDistanceToTarget(arr, target) {
    let lastIndex = -1;
    let minDistance = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
 