
function totalAppeal(s) {
    let total = 0;
    const n = s.length;

    // Iterate through each character in the string
    for (let i = 0; i < n; i++) {
        // Calculate the contribution of s[i]
        // (i + 1) is the number of substrings that can start before or at i
        // (n - i) is the number of substrings that can end at or after i
        total += (i + 1) * (n - i) * (s.charCodeAt(i) 