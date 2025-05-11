
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

function minInterval(intervals, queries) {
    // Sort intervals by the start point
    intervals.sort((a, b) => a[0] - b[0]);

    // Sort queries and keep track of the original indexes
    const sortedQueries = queries.map((q, idx) => ({ query: q, index: idx }));
    sortedQueries.sort((a, b) => a.query - b.query);

    const result = new Array(queries.length);
    const minHeap = new MinHeap();
    let i = 0;

    for (let q of sortedQueries) {
        // Add all intervals that start before or at the query
        while (i < intervals.length && intervals[i][0] <= q.query) {
            minHeap.insert(intervals[i]);
            i++;
        }

        // Remove all intervals from the heap that don't cover the query
        while (minHeap.getMin() && minHeap.getMin()[1] < q.query) {
            minHeap.extractMin();
        }

        // If the heap is not empty, the smallest interval covering the query is at the root
        if (minHeap.getMin()) {
            result[q.index] = minHeap.getMin()[1] - minHeap.getMin()[0] + 1;
        } else {
            result[q.index] = -1; // No interval covers the query
        }
    }

    return result;
}

// Example Usage:
const intervals = [[1, 4], [2, 4], [3, 6]];
const queries = [2, 3, 4, 5];
console.log(minInterval(intervals, queries)); // Output: [3, 3, 3, 4]
