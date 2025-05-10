
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
         