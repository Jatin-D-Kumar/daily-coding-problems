
function getHappyString(n, k) {
    const happyStrings = [];
    
    function backtrack(currentString) {
        // If the current string reaches the desired length, add it to the list
        if (currentString.length === n) {
            happyStrings.push(currentString);
  