
function minOperationsToEqual(arr) {
    const n = arr.length;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const target = Math.round(sum / n); // Calculate the target va