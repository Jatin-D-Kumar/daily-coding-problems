
class WordDistance {
    constructor(wordsDict) {
        this.wordIndices = new Map();
        
        // Store the indices of each word in the map
        for (let i = 0; i < wordsDict.length; i++) {
            const word = wordsDict[i];
            if (!this.wordIndices.has(word)) {
                this.wordIndices.set(word, []);
            }
            this.wordIndices.get(word).push(i);
        }
    }

    shortest(word1, word2) {
        const indices1 = this.wordIndices.get(word1);
        const indices2 = this.wordIndices.get(word2);
        let minDistance = Infinity;
        let i = 0, j = 0;

        // Use two pointers to find the minimum distance
        while (i < indices1.length && j < indices2.length) {
            const index1 = indices1[i];
            const index2 = indices2[j];
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));

            // Move the pointer that points to the smaller index
            if (index1 < index2) {
                i++;
            } else {
                