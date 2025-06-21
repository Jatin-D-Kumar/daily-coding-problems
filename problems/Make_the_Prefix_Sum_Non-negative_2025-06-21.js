
function minInitialValue(nums) {
    let minPrefixSum = 0;
    let currentPrefixSum = 0;

    for (let num of nums) {
        currentPrefixSum += num;
        minPrefixSum = Math.min(minPrefixSum, currentPrefixSum);
    }

    // If minPrefixS