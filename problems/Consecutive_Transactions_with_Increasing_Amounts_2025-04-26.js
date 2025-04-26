
function findLongestIncreasingSequence(transactions) {
    if (transactions.length === 0) {
        return [];
    }
    
    let maxLength = 1;
    let currentLength = 1;
    let maxStartIndex = 0;
    let currentStartIndex = 0;

    for (let i = 1; i < transactions.length; i++) {
        if (transactions[i] > transactions[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStartIndex = currentStartIndex;
            }

            currentLength = 1;
            currentStartInde