
function minOperationsToMakeDivisibleByThree(arr) {
    let totalOperations = 0;

    for (let num of arr) {
        const remainder = num % 3;

        if (remainder === 1) {
            // Minimum operations to ma