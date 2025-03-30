
var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;
    const dp = new Array(m + 1).fill(0);
    
    // Array to store the longest increasing su