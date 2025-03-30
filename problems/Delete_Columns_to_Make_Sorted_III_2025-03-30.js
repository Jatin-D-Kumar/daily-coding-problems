
var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;
    const dp = new Array(m + 1).fill(0);
    
    // Array to store the longest increasing subsequence lengths ending at each column
    const lis = new Array(m).fill(1);
    
    for (let j = 0; j < m; j++) {
        for (let k = 0; k < j; k++) {
            let isValid = true;
            for (let i = 0; i < n; i++) {
                if (strs[i][k] > strs[i][j]) {
                    isValid = false;
                    break;
                }
            }
        