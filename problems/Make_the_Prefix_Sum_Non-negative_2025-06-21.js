
function minInitialValue(nums) {
    let minPrefixSum = 0;
    let currentPrefixSum = 0;

    for (let num of nums) {
        currentPrefixSum += num;
        minPrefixSum = Math.min(minPrefixSum, currentPrefixSum);
    }

    // If minPrefixSum is negative, we need to add enough to make it non-negative
    return Math.max(1 - minPrefixSum, 1);
}

// Example usage:
const nums = [-1, -2, -3, -4];
console.log(minInitialValue(nums)); // Output: 10

const nums2 = [1, 2, 3];
console.log(