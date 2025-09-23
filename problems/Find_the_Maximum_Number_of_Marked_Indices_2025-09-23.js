
function maxMarkedIndices(arr) {
    const n = arr.length;
    // Sort the array in non-decreasing order
    arr.sort((a, b) => a - b);
  
    let markedCount = 0; // To count the maximum number of marked indices
    let i = 0; // Index for the first half
    let j = Math.floor(n / 2); // I