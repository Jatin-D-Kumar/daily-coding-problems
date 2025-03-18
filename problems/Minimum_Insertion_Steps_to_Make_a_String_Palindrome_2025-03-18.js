
function minInsertions(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Fill the dp table
    for (let length = 2; length <= n; length++) {
   