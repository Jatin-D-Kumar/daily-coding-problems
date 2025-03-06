
function minChangesToKSemiPalindromes(s, K) {
    const n = s.length;

    // Function to calculate the number of changes needed to make a substring semi-palindrome
    function semiPalindromeChanges(start, end) {
        let changes = 0;
        while (start < end) {
      