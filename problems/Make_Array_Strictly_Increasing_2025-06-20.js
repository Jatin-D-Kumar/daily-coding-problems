
function canBeMadeStrictlyIncreasing(arr) {
    let count = 0; // Counter for the number of modifications

    for (let i = 1; i < arr.length; i++) {
        // If the current element is not greater than the previous one
        if (arr[i] <= arr[i - 1]) {
            count++;
            // If we've already modified an element, return false
            if (count > 1) {
                return false;
            }
            // Modify the current element or the previous one to make the array strictly increasing
            if (i === 1 || arr[i] > arr[i - 2]) {
                // Modify arr[i - 1] to arr[i] - 1
                arr[i - 1] = arr[i] - 1; 
            } else {
                // Otherwise modify arr[i] to arr[i - 1] + 1
                arr[i] = arr[i - 1] + 1;
            }
        }
    }

    return true; // It's possible to make the array strictly increasing
}

// Example usage:
const arr1 = [1, 5, 3, 6];
console.log(canBeMadeStrictlyIncreasing(arr1)); // Outp