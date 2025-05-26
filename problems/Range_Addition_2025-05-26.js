
function getModifiedArray(length, updates) {
    const nums = new Array(length).fill(0); // Initialize the array with zeros

    // Apply the range update logic using the difference array concept
    for (const [startIndex, endIndex, increment] of updates) {
        nums[startIndex] += increment; // S