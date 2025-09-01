
function canTransformToEqual(arr) {
    if (arr.length === 0) return false;

    const n = arr.length;
    const sum = arr.reduce((a, b) => a + b, 0);
    const targetValue = sum / 