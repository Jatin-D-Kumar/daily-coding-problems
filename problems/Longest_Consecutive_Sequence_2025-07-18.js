function longestConsecutive(nums) {
const numSet = new Set(nums);
    let longest = 0;
for (let num of numSet) {
        // Check only starting points of sequences
        if (!numSet.has(num - 1)) {
let currentNum = num;
            let streak = 1;
while (numSet.has(currentNum + 1)) {
                currentNum++;
                streak++;
}
