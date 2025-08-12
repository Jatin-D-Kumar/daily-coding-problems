
function isAdditiveNumber(num) {
    const n = num.length;

    // Helper function to check if the sequence is valid
    function isValidSequence(start, first, second) {
        let sum = first + second;
