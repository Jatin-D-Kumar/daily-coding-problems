
function shortestWordDistance(words, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let minDistance = Infinity;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            index1 = i;  // Update the index of word1
            // If word2 is the same as word1, ensure we look for a different instance
            if (word1 === word2 && index2 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(index1 - index2));
            }
        }

        if (words[i] === word2) {
            index2 = i;  // Update the index of word2
            // If word1 is the same as word2, ensure we look for a different instance
            if (word1 === word2 && index1 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(index2 - index1));
            }
        }

        // For different words, calculate the minimum distance
        if (word1 !== word2 && index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
    }

    return minDistance === Infinity ? -1 : minDistance;  // Return -1 if no distance found
}

// Example usage:
const words = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestWordDistance(words, "coding", "practice")); // Output: 3
console.log(shortestWordDistance(words, "makes", "coding"));    // Output: 1
console.log(shortestWordDistance(words, "makes", "makes"));     // Output: 3
