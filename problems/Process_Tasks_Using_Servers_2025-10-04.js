
/**
 * Min‑heap implementation for numbers
 */
class MinHeap {
  constructor() {
    this.data = [];
  }

  // Insert a value
  push(val) {
    const a = this.data;
    a.push(val);
    this._siftUp(a.length - 1);
  }

  // Remove and return the smallest value
  pop() {
   