
function minOperationsToEqual(arr) {
    const n = arr.length;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const target = Math.round(sum / n); // Calculate the target value (average)

    let operations = 0;

    // Calculate the total number of operations needed to make all elements equal to