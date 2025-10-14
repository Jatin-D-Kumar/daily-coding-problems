
function countDominantSubstrings(s) {
    let balance = 0;
    let count = 0;
    let balanceMap = new Map();
    balanceMap.set(0, 1); // We start with a balance of 0 at the "before start" position.

    for (let i = 0; i < s.length; i++) {
   