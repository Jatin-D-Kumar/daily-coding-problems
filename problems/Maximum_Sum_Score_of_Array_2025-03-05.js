
function maxSumScore(arr) {
    if (arr.length === 0) {
        return 0; // No elements, no score
    }
    
    let maxSoFar = arr[0]; // This will hold the max sum found so far
    let maxEndingHere = arr[0]; // This holds the max sum of the subarray ending at the current position

    for (let i = 1; i < arr.length; i++) {
        // Calculate maxEnd