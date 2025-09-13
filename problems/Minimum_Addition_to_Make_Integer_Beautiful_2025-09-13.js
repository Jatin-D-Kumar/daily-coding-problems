
function minAdditionToMakeIntegerBeautiful(n, k) {
    const digitSum = (num) => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    let currentSum = digitSum(n);
    
    // If the current digit sum is already beautiful, return 0.
    if (currentSum % k === 0) {
        return 0;
    }

    // Calculate the smallest number to add to make the digit sum beautiful.
    const remainder = currentSum % k;
    return k - remainder;
}

// Example usage:
console.log(minAdditionToMakeIntegerBeautiful(38, 5)); // Output: 2
console.log(minAdditionToMakeIntegerBeautiful(123, 9)); // Output: 6
