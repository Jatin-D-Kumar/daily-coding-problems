
function countSubstringsWithKDistinct(s, k) {
    const atMostK = (k) => {
        const charCount = new Map();
        let left = 0;
        let count = 0;

        for (le