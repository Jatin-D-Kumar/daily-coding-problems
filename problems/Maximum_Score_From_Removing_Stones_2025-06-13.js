
function maxScore(stones) {
    // Calculate the total number of stones
    let totalStones = stones.reduce((acc, curr) => acc + curr, 0);
    
    // The maximum possible score we can 