
function findDisappearedNumbers(nums) {
    const n = nums.length;
    const numSet = new Set(nums);
    const missingNumbers = [];

    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

// Example usage:
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const result = findDisappea