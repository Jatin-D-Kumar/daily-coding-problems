
function minChangesToMakeAlternatingBinaryString(s) {
    let changesForPattern1 = 0; // For pattern starting with '0'
    let changesForPattern2 = 0; // For pattern starting with '1'

    for (let i = 0; i < s.length; i++) {
        // Determine what the expected character is for both patterns
        const expectedCharForPattern1 = (i % 2 === 0) ? '0' : '1'; // Pattern 1: 010101...
        const expectedCharForPattern2 = (i % 2 === 0) ? '1' : '0'; // Pattern 2: 101010...

        // Count changes needed for pattern 1
        if (s[i] !== expectedCharForPattern1) {
            changesForPattern1++;
        }

        // Count changes needed for pattern 2
        if (s[i] !== expectedCharForPattern2) {
  