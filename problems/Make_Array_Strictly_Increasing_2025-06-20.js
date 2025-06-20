
function canBeMadeStrictlyIncreasing(arr) {
    let count = 0; // Counter for the number of modifications

    for (let i = 1; i < arr.length; i++) {
        // If the current element is not greate