
class WordDistance {
    constructor(wordsDict) {
        this.wordIndices = new Map();
        
        // Store the indices of each word in the map
        for (let i = 0; i < wordsDict.length; i++) {
            const word = wordsDict[i];
            if (!this.wordIndices.has(word)) {
                this.wordIndices.set(word, []);
            