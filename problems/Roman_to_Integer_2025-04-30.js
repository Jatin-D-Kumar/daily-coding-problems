
function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = 0; i < s.length; i++) {
        const currentValue = romanMap[s[i]];

        // Subtract value if the previous value is less (indicating a subtractive combination)
        if (currentValue > prevValue) {
            total += currentValue - 2 * prevValue; // we add currentValue but subtract twice the prevValue
        } else {
            total += currentValue;
        }

        // Update prevValue to the current value for the next iteration
        prevValue = currentValue;
    }

    return total;
}

// Example usage:
console.log(romanToInt("III"));   // Output: 3
console.log(romanToInt("IV"));    // Output: 4
console.log(romanToInt("IX"));    // Output: 9
console.log(romanToInt("LVIII"));  // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
