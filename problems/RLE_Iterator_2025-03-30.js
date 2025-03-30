
class RLEIterator {
    constructor(A) {
        this.A = A; // The input array representing the RLE encoding
        this.index = 0; // Current index in the array
        this.count = 0; // Remaining count of the current value
    }

    next(n) {
        while (this.index < this.A.length) {
            // If we have no remaining count, move to the next value
            if (this.count === 0) {
                this.count = this.A[this.index]; // Get the count of the current value
                this.index += 1; // Move to the next value
            }

            // If n is less than or equal to the remaining count
            if (n <= this.count) {
                this.count -= n; // Decrease the count by n
                return this.A[this.index - 1]; // Return the current value
            }

            // If n is greater than the remaining count
            n -= this.count; // Decrease n by the remaining count
            this.count = 0; // Reset count for the next valu