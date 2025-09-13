
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

    // Calculate the smallest number to ad