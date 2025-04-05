
class CustomStack {
    constructor(maxSize) {
        this.stack = [];
        this.maxSize = maxSize;
        this.increment = Array(maxSize).fill(0); // To store increments
    }

    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }

    pop() {
        if (th