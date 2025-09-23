
function maxMarkedIndices(arr) {
    const n = arr.length;
    // Sort the array in non-decreasing order
    arr.sort((a, b) => a - b);
  
    le