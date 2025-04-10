
function singleNumber(nums) {
    // Step 1: Find the XOR of all numbers
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }

    // Step 2: Find a bit that is set in the xor result
    let rightmostSetBit = xor & -xor;

    // Step 3: Divide the numbers into two groups and find the unique numbers
    let num1 = 0, num2 = 0;
    for (let num of nums) {
        if (num & rightmostSetBit) {
            num1 ^= num; // Group with the set bit
        } else {
            num2 ^= num; // Group without the set bit
        }
    }

    return [num1, num2];
}

// Example usage:
const nums = [1, 2, 1, 3, 2, 5];
const result = singleNumber(nums);
console.log(result); // Output: [3, 5] or [5, 3]
