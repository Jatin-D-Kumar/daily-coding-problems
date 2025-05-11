
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
        let index = this.heap.length