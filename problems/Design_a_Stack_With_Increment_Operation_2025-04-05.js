
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
        if (this.stack.length === 0) {
            return -1;
        }
        const index = this.stack.length - 1;
        const value = this.stack.pop() + this.increment[index]; // Add the increment
        if (index > 0) {
            this.increment[index - 1] += this.increment[index]; // Carry over increment
        }
        this.increment[index] = 0; // Reset the increment for the popped element
        return value;
    }

    increment(k, val) {
        const effectiveK = Math.min(k, this.stack.length); // Only increment the available elements
        if (effectiveK > 0) {
            this.increment[effectiveK - 1] += val; // Increment the right index
        }
    }
}

// Example usage:
const stack = new CustomStack(3);
stack.push(1);          // Stack: [1]
stack.push(2);          // Stack: [1, 2]
console.log(stack.pop()); // Returns 2, Stack: [1]
stack.push(2);          // Stack: [1, 2]
stack.push(3);          // Stack: [1, 2, 3]
stack.push(4);        