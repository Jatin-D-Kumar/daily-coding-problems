
function canTransformToEqual(arr) {
    if (arr.length === 0) return false;

    const n = arr.length;
    const sum = arr.reduce((a, b) => a + b, 0);
    const targetValue = sum / n;

    // To transform the array to all elements equal to targetValue,
    // the targetValue should be a whole number.
    // If it's not, it's not possible to make all elements eq