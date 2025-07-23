
function isPalindrome(n) {
    const str = String(n);
    return str === str.split('').reverse().join('');
}

function superPalindromesInRange(L, R) {
    let count = 0;

    // Define the upper limit for the palindromic numbers to check.
    const limi