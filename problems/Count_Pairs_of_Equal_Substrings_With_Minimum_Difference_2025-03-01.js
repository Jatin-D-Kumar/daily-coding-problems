
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