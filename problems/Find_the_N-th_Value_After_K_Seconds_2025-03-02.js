
function findNthValueAfterKSeconds(startValue, increment, n, k) {
    // Calculate the N-th value after K seconds
    // Assuming `k` seconds adds an increment to the value each second
    let finalValue = startValue + (increment * k);
    
    // For simplicity,