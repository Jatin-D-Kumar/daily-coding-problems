
function countDominantSubstrings(s) {
    let balance = 0;
    let count = 0;
    let balanceMap = new Map();
    balanceMap.set(0, 1); // We start with a balance of 0 at the "before start" position.

    for (let i = 0; i < s.length; i++) {
        // Update the balance based on the current character
        if (s[i] === '1') {
            balance++;
        } else {
            balance--;
        }

        // Count how many times a balance >= current balance has occurred
        for (let prevBalance = balance; prevBalance >= -s.length; prevBalance--) {
            if (balanceMap.has(prevBalance)) {
                count += balanceMap.get(prevBalance);
            }
        }

        // Store or update the count of this bala