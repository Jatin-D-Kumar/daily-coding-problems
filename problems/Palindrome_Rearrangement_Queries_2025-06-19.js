
function canFormPalindrome(s) {
    const charCount = {};
    
    // Count the occurrences of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let oddCount = 0;
    
    // Count how many characters have an odd count
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }
    
    // A string can form a palindrome if it has at most one odd character count
    return oddCount <= 1;
}

// Ex