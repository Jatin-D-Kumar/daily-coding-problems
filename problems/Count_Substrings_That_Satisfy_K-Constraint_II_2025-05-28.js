
function countSubstringsWithKDistinct(s, k) {
    const atMostK = (k) => {
        const charCount = new Map();
        let left = 0;
        let count = 0;

        for (let right = 0; right < s.length; right++) {
            charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

            while (charCount.size > k) {
                c