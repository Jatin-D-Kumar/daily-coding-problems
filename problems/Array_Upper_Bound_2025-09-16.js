
function upperBound(arr, target) {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        
        // Move right if mid value is less than or equal to target
        if (arr[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid; // Move left otherwise
        }
    }

    re