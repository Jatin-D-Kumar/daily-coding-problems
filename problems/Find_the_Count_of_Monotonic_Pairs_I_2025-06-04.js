
function countMonotonicPairs(arr) {
    let n = arr.length;
    let count = 0;

    // Count non-decreasing pairs
    let nonDecreasingCount = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] >= arr[i - 1]) {
            nonDecreasingCount++;
        } else {
            // If the sequence breaks, count the pairs formed
            count += (nonDecreasingCount * (nonDecreasingCount + 1)) / 2;
            nonDecreasingCount = 0; // Reset the count
        }
    }
    // Count the remaining pairs if the last sequence was non-decreasing
    count += (nonDecreasingCount * (nonDecreasingCount + 1)) / 2;

    // Count non-increasing pairs
    let nonIncreasingCount = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] <= arr[i - 1]) {
            nonIncreasingCount++;
        } else {
            // If the sequence breaks, count the pairs formed
            count += (nonIncreasingCount * (nonIncreasingCount + 1)) / 2;
            nonIncreasingCount = 0; // Reset the count
        }
    }
    // Count the remaining pairs if the last sequence was non-increasing
    count += (nonIncreasingCount * (nonIncreasingCount + 1)) / 2;

    return count;
}

// Example usage:
const arr = [1, 2, 2, 3, 1, 1, 1];
console.log(countMonotonicPairs(arr)); // Output the count of monotonic pairs
