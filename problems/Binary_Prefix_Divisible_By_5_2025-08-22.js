
function prefixesDivBy5(A) {
    let result = [];
    let currentValue = 0;

    for (let i = 0; i < A.length; i++) {
        // Shift current value to the left (multiply by 2) and add the current bit
        currentValue = (currentValue * 2 + A[i]) % 5;

        // Check if current value is d