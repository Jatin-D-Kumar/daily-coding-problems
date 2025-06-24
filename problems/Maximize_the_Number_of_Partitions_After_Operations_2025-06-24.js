
function maximizePartitions(arr, maxValue) {
    let partitions = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        // Check if we can include the current element in the current partition
        if (currentSum + arr[i] <= maxValue) {
            currentSum += arr[i]; // Add to the current segment
        } else {
            // If it exceeds, we need to create a new partition
            partitions++;
            currentSum = arr[i]; // Start new partition
        }
    }

    // Count the last partition if it's not empty
    if (currentSum > 0) {
        partitions++;
    }

    return partitions;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const maxValue = 5;
const result = maximizeParti