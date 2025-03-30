
class RLEIterator {
    constructor(A) {
        this.A = A; // The input array representing the RLE encoding
        this.index = 0; // Current index in the array
        this.count = 0; // Remaining count of the current value
    }

    next(n) {
        while (this.index < this.A.length) {
            // If we have no remaini