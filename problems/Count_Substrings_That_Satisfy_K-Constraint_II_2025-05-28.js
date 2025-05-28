
function countSubstringsWithKDistinct(s, k) {
    const atMostK = (k) => {
        const charCount = new Map();
        let left = 0;
        let count = 0;

        for (let right = 0; right < s.length; right++) {
            charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

            while (charCount.size > k) {
                charCount.set(s[left], charCount.get(s[left]) - 1);
                if (charCount.get(s[left]) === 0) {
                    charCount.delete(s[left]);
                }
                left++;
            }
            // Add the number of new substrings ending with `right` index
            count += right - left + 1;
        }
        return count;
    }

    return atMostK(k) - atMostK(k - 1);
}

// Example usage
const s = "abcabc";
const k = 2;
console.log(countSubstringsWithKDistinct(s, k)); // Output example
