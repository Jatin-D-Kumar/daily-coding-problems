
function canFormPalindrome(s) {
    const charCount = {};
    
    // Count the occurrences of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let oddCount = 0;
    
    // Count how many characters have an odd count
    for (let count of Object.val