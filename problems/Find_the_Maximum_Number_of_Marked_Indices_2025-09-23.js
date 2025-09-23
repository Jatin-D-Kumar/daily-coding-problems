
function maxMarkedIndices(arr) {
    const n = arr.length;
    // Sort the array in non-decreasing order
    arr.sort((a, b) => a - b);
  
    let markedCount = 0; // To count the maximum number of marked indices
    let i = 0; // Index for the first half
    let j = Math.floor(n / 2); // Index for the second half

    // Use two pointers to mark indices according to the rules
    while (i < Math.floor(n / 2) && j < n) {
        if (arr[j] >= 2 * arr[i]) {
            // If condition is met, mark the indices
            markedCount += 2; // Mark both i and j
            i++; /