
function isAdditiveNumber(num) {
    const n = num.length;

    // Helper function to check if the sequence is valid
    function isValidSequence(start, first, second) {
        let sum = first + second;
        let sumStr = sum.toString();
        let nextStart = start + sumStr.length;

        // If the next part of the string doesn't match the sum, return false
        if (nextStart > n || num.substring(start, nextStart) !== sumStr) {
            return false;
        }

        // If we reach the end of the string, we have a valid sequence
        if (nextStart === n) {
            return true;
        