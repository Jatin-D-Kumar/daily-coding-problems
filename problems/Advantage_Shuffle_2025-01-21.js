
function advantageShuffle(A, B) {
    // Sort both arrays
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    const n = A.length;
    const result = new Array(n);
    const used = new Array(n).fill(false);
    
    let j = 0; // Pointer for B
    for (let i = 0; i < n; i++) {
        // Find the first card in A that can be