
function validMountainArray(arr) {
    const n = arr.length;

    // Check if the array has at least 3 elements
    if (n < 3) return false;

    let i = 0;

    // Climb up the mountain
    while (i < n - 1 && arr[i] < arr[i + 1]) {
        i++;
    }

    // Check if we 