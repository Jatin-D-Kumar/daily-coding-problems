
function countGoodNumbers(n) {
    if (n === 1) {
        return 10; // For n = 1, we can use digits 0-9
    }

    // For n > 1
    const firstDigitOptions = 9; // Digits 1-9 for the first digit
    const otherDigitOptions = 10; // Digits 0-9 for the other digits

    // Calculate the total number of good numbers
    let totalGoodNumbers = firstDigitOptions * Math.pow(otherDigitOptions, n - 1);
    
    return totalGoodNumbers;
}

// Example usage:
console.log(countGoodNumbers(1)); // Output: 10
console.log(c