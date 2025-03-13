
function findKthPositive(arr, k) {
    let missingCount = 0;
    let current = 1; // Start checking from the first positive integer
    let arrIndex = 0; // Index for the array

    while (missingCount < k) {
        if (arrIndex < arr.length && arr[arrIndex] === current) {
            // If current is found in the 