
function isPalindrome(num) {
    // Convert the number to a string
    const str = num.toString();
    
    // Initialize pointers for the start and end of the string
    let left = 0;
    let right = str.length - 1;
    
    // Check characters from both ends towards the center
    while (left < right) {
        if (str[left] !== st