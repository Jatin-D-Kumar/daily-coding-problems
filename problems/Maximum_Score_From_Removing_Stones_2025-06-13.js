
function maxScore(stones) {
    // Calculate the total number of stones
    let totalStones = stones.reduce((acc, curr) => acc + curr, 0);
    
    // The maximum possible score we can achieve:
    // Each operation removes stones worth either 1 or 2 points. 
    // Thus, the s