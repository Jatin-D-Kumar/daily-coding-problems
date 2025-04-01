
function minMountainTripletSum(arr) {
    let n = arr.length;
    if (n < 3) return 0; // Not enough elements for a triplet
    
    let minSum = Infinity;
    
    for (let i = 1; i < n - 1; i++) {
        // Treat arr[i] as the peak
        let peak = arr[i];
        
        // Find the left minimum (less than peak)
        let leftMin = Infinity;
        for (let j = 0; j < i; j++) {
            if (arr[j] < peak) {
                leftMin = Math.min(leftMin, arr[j]);
            }
        }
        
        // Find the right minimum (greater than peak)
        let rightMin = Infinity;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > peak) {
                rightMin = Math.min(rightMin, arr[j]);
            }
        }
        
        // If both left and right mins were found, check the sum
        if (leftMin !== Infinity && rightMin !== Infinity) {
            let currentSum = leftMin + peak + rightMin;
            minSum = Math.min(minSum, currentSum);
        }
    }
    
    return minSum === Infinity ? -1 : minSum; // Return -1 if no triplets found
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
console.log(minMountainTripletSum(arr)); // Replace arr with your test case
