
var shortestDistance = function(wordsDict, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let minDistance = Infinity;
    
    for (let i = 0; i < wordsDict.length; i++) {
    