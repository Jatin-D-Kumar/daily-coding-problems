
function advantageShuffle(A, B) {
    // Sort both arrays
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    const n = A.length;
    const result = new A