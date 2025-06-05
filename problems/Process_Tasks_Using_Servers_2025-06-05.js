
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (element[1] >= parent[1]) break;

            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
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
                if (leftChild[1] < element[1]) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[1] < element[1]) ||
                    (swap !== null && rightChild[1] < leftChild[1])
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function processTasks(servers, tasks) {
    const minHeap = new MinHeap();
    const serverLoad = new Array(servers).fill(0);

    // Initialize the heap with servers
    for (let i = 0; i < servers; i++) {
        minHeap.insert([i, 0]); // [serverIndex, currentLoad]
    }

    for (const task of tasks) {
        const [serverIndex, currentLoad] = minHeap.extractMin();
        serverLoad[serverIndex] += task; // Assign task to the server
        minHeap.insert([serverIndex, serverLoad[serverIndex]]); // Update server load
    }

    return Math.max(...serverLoad); // Return the maximum load of any server
}

// Example usage:
const servers = 3;
const tasks = [1, 2, 3, 4, 5];
const result = processTasks(servers, tasks);
console.log(result); // Output: 7
