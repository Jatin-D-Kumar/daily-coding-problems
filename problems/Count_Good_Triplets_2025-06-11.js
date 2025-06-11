
function countGoodTriplets(arr, a, b, c) {
    let count = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c) {
                    count++;
                }
            }
        }
    }

    return count;
}

// Example usage:
const arr = [1, 2, 3, 4];
const a = 1;
const