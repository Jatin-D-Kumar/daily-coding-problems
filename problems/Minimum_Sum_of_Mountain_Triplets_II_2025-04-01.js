
function minMountainTripletSum(arr) {
    let n = arr.length;
    if (n < 3) return 0; // Not enough elements for a triplet
    
    let minSum = Infinity;
    
    for (let i = 1; i < n - 1; i++) {
        // Treat arr[i] as the peak
        let peak = arr[i];
        
        // Find the left minimum (less than peak)
        let leftMin = Infinity;
        for (let j = 0; j < i; j++) {
            if (arr[j] < peak) {
                leftMin = Math.min(leftMin, arr[j]);
            }
        }
        
        // Find the right minimum (greater than peak)
        let rightMin = Infinity;
        for (l