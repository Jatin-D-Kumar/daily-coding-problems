
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
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    // Restore heap property by moving down the element
    heapifyDown(index) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left][1] < this.heap[smallest][1]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right][1] < this.heap[smallest][1]) {
            smallest = right;
        }
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    // Get the root element (minimum) of the heap
    getMin() {
        return this.heap[0];
    }
}

function minInterval(intervals, queries)