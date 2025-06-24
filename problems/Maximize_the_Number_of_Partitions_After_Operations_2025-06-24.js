
function maximizePartitions(arr, maxValue) {
    let partitions = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        // Check if we can include the current element in the current pa