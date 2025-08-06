
function wordSubsets(A, B) {
    // Create a frequency count for all characters needed from B
    const freqB = Array(26).fill(0);
    
    for (co