
function countPairsOfEqualSubstrings(s) {
    const substringMap = new Map();
    const n = s.length;

    // Generate all substrings and store their starting indices
    for (let length = 1; length <= n; length++) { // substring lengths
        for (let start = 0; start <= n - length; start++) {
            const substring = s.substring(start, start + length);
            if (!substringMap.has(substring)) {
                substringMap.set(substring, []);
            }
            substringMap.get(substring).push(start);
        }
    }

    let count = 0;

    // For each set of starting indices, calculate the pairs with minimum difference
    for (const indices of substringMap.values()) {
        const len = indices.length;
        
        // If there are two or more indices for this substring, count pairs
        if (len > 1) {
            for (let i = 0; i < len - 1; i++) {
                for (let j = i + 1; j < len; j++) {
    