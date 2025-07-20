
function encodeNumber(num) {
    if (num < 1) return ""; // Handle case where number is less than 1

    let result = '';
    while (num > 0) {
        // Adjust num because 'a' should map to 1, not 