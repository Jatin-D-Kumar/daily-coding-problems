
function minTimeToSpread(variants, K) {
    if (K <= 0) return 0; // No time needed if K is 0 or less
    if (variants.length === 0) return -1; // Impossible if no variants are available

    // Min-heap to store the time it takes for each variant to spread
    const minHeap = new MinHeap();
    for (let time of variants) {
        minHeap.insert(time);
    }

    let timeElapsed = 0;
    let count = 0;

    while (count < K) {
        if (minHeap.isEmpty()) return -1; // Not enough variants to spread

        // Get the variant that spreads the fastest
        const currentTime = minHeap.extractMin();
        timeElapsed = currentTime; // Update the time elapsed
        count++; // One more variant has spread

        // Each variant can creat