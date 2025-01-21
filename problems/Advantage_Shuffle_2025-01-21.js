
function advantageShuffle(A, B) {
    // Sort both arrays
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    const n = A.length;
    const result = new Array(n);
    const used = new Array(n).fill(false);
    
    let j = 0; // Pointer for B
    for (let i = 0; i < n; i++) {
        // Find the first card in A that can beat the current card in B
        while (j < n && A[i] <= B[j]) {
            j++;
        }
        // If we found a card in A that can beat B[j], use it
        if (j < n) {
            result[i] = A[i];
            used[j] = true; // Mark this card as used
            j++; // Move to the next card in B
        } else {
            // If