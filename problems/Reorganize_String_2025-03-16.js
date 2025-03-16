
function reorganizeString(S) {
    const charCount = {};
    
    // Count the frequency of each character
    for (const char of S) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Create a max heap based on character frequency
    const maxHeap = [];
    