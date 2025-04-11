
function findBestValue(arr, target) {
    let left = 0;
    let right = Math.max(...arr);
    let bestValue = 0;
    let closestSum = Infinity;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentSum = arr.reduce((sum, num) => sum + Math.min(num, mid), 0);

        if (currentSum === target) {
            return mid; // Found the exact target
        }

        if (currentSum < target) {
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
                bestValue = mid;
            }
            left = mid + 1; // Increase the mid value
        } else {
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
                bestValue = mid;
            }
            right = mid - 1; // Decrease the mid value
        }
    }

    return bestValue;
}

// Example usage:
const arr = [2, 3, 5];
const target = 10;
console.log(findBestValue(arr, target)); // Output: the best value
