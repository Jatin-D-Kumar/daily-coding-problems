
function maxTotalFruits(fruits, startPos, k) {
    const n = fruits.length;
    let maxFruits = 0;

    // Iterate over possible leftmost and rightmost positions
    for (let left = 0; left < n; left++) {
    