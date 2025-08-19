
function reformatPhoneNumber(phone) {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    let result = '';
    let i = 0;

    while (i < digits.length) {
        const remainingDigits = digits.length - i;

        // If there are 4 digits left, we need to split into 2 and 2
        if (remainingDigits === 4) {
            // Push first two digits
            result += digits.slice(i, i + 2) + '-';
            // Push last two digits
            result += digits.slice(i + 2, i + 4);
            break;
        }
        
        // Otherwise, group them in chunks of 3
        if (remainingDigits > 3) {
            result += digits.slice(i, i + 3) + '-';
            i += 3;
        } else {
            // Last chunk of remaining digits must be of length 2 or 3
            result += digits.slice(i);
            break;
        }
    }

    return result;
}

// Example usage:
console.log(reformatPhoneNumber("1-23-45 6")); // Output: "123-456"
console.log(reformatPhoneNumber("123 4-567")); // Outp