
function canBeMadeStrictlyIncreasing(arr) {
    let count = 0; // Counter for the number of modifications

    for (let i = 1; i < arr.length; i++) {
        // If the current element is not greater than the previous one
        if (arr[i] <= arr[i - 1]) {
            count++;
            // If we've already modified an element, return false
            if (count > 1) {
                return