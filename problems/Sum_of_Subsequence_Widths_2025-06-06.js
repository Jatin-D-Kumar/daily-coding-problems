
function sumSubseqWidths(A) {
    const n = A.length;
    // Sort the array
    A.sort((a, b) => a - b);
    
    let totalWidth = 0;
    const mod = 1e9 + 7; // To prevent overflow, we can use modulo

    // Precompute powers 