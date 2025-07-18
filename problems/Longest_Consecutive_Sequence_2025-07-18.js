function longestConsecutive(nums) {
const numSet = new Set(nums);
    let longest = 0;
for (let num of numSet) {
        // Check only starting points of sequences
        if (!numSet.has(num - 1)) {
