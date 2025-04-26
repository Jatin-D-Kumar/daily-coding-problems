
function findLongestIncreasingSequence(transactions) {
    if (transactions.length === 0) {
        return [];
    }
    
    let maxLength = 1;
   