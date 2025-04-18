
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
        const [count, char] = maxHeap.shift(); // Get the character with the highest frequency

        // Append the current character to the result
        result += char;

        // If we had a previous character, push it back to the heap
        if (prevCount < 0) {
            maxHeap.push([prevCount, prevChar]);
            maxHeap.sort(); // Re-sort after adding back
        }

        // Update the count of the current character
        prevChar = char;
        prevCount = count + 1; // Decrease the count
    }

    // If the result length is not equal to the original string, return an empty string
    return result.length === S.length ? result : '';
}

// Example usage:
console.log(reorganizeString("aabbcc")); // Output could be "abcabc" or any valid rearrangement
console.log(reorganizeString("aaab"));    // Output: ""
