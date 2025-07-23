
function isPalindrome(n) {
    const str = String(n);
    return str === str.split('').reverse().join('');
}

function superPalindromesInRange(L, R) {
    let count = 0;

    // Define the upper limit for the palindromic numbers to check.
    const limit = Math.sqrt(R);
    
    // Generate odd-length palindromes
    for (let i = 1; i <= limit; i++) {
        const str = String(i);
        const palStrOdd = str + str.slice(0, str.length - 1).split('').reverse().join('');
        const palOdd = BigInt(palStrOdd);
        const palOddSquare = palOdd * palOdd;
        
        if (palOddSquare >= BigInt(L) && palOddSquare <= BigInt(R) && isPalindrome(palOddSquare)) {
            count++;
        }
    }
    
    // Generate even-length palindromes
    for (let i = 1; i <= limit; i++) {
        const str = String(i);
        const palStrEven = str + str.split('').reverse().join('');
        const palEven = BigInt(palStrEven);
        const palEvenSquare = palEven * palEven;
        
        if (palEvenSquare >= BigInt(L) && palEvenSquare <= BigInt(R) && isPalindrome(palEvenSquare)) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
const L = "4";
const R = "1000";
console.log(superPalindromesInRange(L, R));  // Output: 4
