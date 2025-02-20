
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

        // Each variant can create a new variant after it spreads
        minHeap.insert(currentTime + currentTime); // Simulate the new variant
    }

    return timeElapsed;
}

// MinHeap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex <