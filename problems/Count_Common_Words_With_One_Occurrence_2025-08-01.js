
/**
 * Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
 *
 *
 *
 * Example 1:
 *
 * Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
 * Output: 2
 * Explanation:
 * - "leetcode" appears exactly once in each of the two arrays. We count this string.
 * - "amazing" appears exactly once in each of the two arrays. We count this string.
 * - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
 * Example 2:
 *
 * Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
 * Output: 0
 * Explanation: There are no strings that appear exactly once in each of the two arrays.
 * Example 3:
 *
 * Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
 * Output: 1
 * Explanation: The only string that appears exactly once in each of the two arrays is "ab".
 *
 *
 * Constraints:
 *
 * 1 <= words1.length, words2.length <= 1000
 * 1 <= words1[i].length, words2[i].length <= 30
 * words1[i] and words2[i] consist of lowercase English letters.
 */
const countWords = (words1, words2) => {
  const freq1 = {};
  const freq2 = {};

  for (const word of words1) {
    freq1[word] = (freq1[word] || 0) + 1;
  }

  for (const word of words2) {
    freq2[word] = (freq2[word] || 0) + 1;
  }

  let count = 0;

  for (const word in freq1) {
    if (freq1[word] === 1 && freq2[word] === 1) {
      count++;
    }
  }

  return count;
};
