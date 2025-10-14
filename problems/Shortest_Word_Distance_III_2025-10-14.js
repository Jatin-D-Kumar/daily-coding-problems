
var shortestDistance = function(wordsDict, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let minDistance = Infinity;
    
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            index1 = i;
        }
        if (wordsDict[i] === word2) {
            index2 = i;
        }
        
        // If both words have been found, c