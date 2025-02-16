
function singleNumber(nums) {
    // Step 1: Find the XOR of all numbers
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }

    // Step 2: Find a bit that is set in the xor result
    let rightmostSetBit = xor & -xor;

    // Step 3: Divide the numbers into two groups and find the un