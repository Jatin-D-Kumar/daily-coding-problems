
function validMountainArray(arr) {
    const n = arr.length;

    // Check if the array has at least 3 elements
    if (n < 3) return false;

    let i = 0;

    // Climb up the mountain
    while (i < n - 1 && arr[i] < arr[i + 1]) {
        i++;
    }

    // Check if we have reached the peak and it's not the first or last element
    if (i === 0 || i === n - 1) return false;

    // Climb down the mountain
    while (i < n - 1 && arr[i] > arr[i + 1]) {
        i++;
    }

    // If we reached the end of the array, it's a valid mountain array
    return i === n - 1;
}

// Example usage:
console.log(validMountainArray([2, 1])); // false
console.log(validMountainArray([3, 5, 5])); // false
console.log(validMountainArray([0, 3, 2, 1])); // true
console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0])); // true
