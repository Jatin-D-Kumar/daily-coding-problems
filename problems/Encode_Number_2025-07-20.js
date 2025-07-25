
function encodeNumber(num) {
    if (num < 1) return ""; // Handle case where number is less than 1

    let result = '';
    while (num > 0) {
        // Adjust num because 'a' should map to 1, not 0.
        num--; 
        let remainder = num % 26;
        result = String.fromCharCode(remainder + 'a'.charCodeAt(0)) + result;
        num = Math.floor(num / 26);
    }
    return result;
}

// Example usage:
console.log(encodeNumber(1));  // Output: "a"
console.log(encodeNumber(2));  // Output: