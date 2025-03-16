
function reorganizeString(S) {
    const charCount = {};
    
    // Count the frequency of each character
    for (const char of S) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Create a max heap based on character frequency
    const maxHeap = [];
    for (const char in charCount) {
        maxHeap.push([-charCount[char], char]); // Push negative count for max heap
    }
    maxHeap.sort(); // Sort to create a max heap

    let result = '';
    let prevChar = null;
    let prevCount = 0;

    while (maxHeap.length > 0) {
    