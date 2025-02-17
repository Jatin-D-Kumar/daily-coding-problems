
function getStrongest(arr, k) {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);
    
    // Step 2: Find the median
    const n = arr.length;
    const median = n % 2 === 0 ? (arr[n / 2 - 1] + arr[n / 2]) / 2 : arr[Math.floor(n / 2)];
    
    // Step 3: Create an array of strengths
    const strengths = ar