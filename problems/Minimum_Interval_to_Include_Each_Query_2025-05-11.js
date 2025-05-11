
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper function to swap two elements
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert an element into the heap
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    // Move the element up to restore heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    // Extract the root element (minimum) from the heap
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return th