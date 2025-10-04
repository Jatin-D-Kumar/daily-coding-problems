
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
    const a = this.data;
    if (a.length === 0) return undefined;
    const min = a[0];
    const last = a.pop();
    if (a.length > 0) {
      a[0] = last;
      this._siftDown(0);
    }
    return min;
  }

  _siftUp(idx) {
    const a = this.data;
    while (idx > 0) {
      const parent = (idx - 1) >> 1;
      if (a[parent] <= a[idx]) break;
      [a[parent], a[idx]] = [a[idx], a[parent]];
      idx = parent;
    }
  }

  _siftDown(idx) {
    const a = this.data;
    const n = a.length;
    while (true) {
      let left = (idx << 1) + 1;
      let right = left + 1;
      let smallest = idx;

      if (left < n && a[left] < a[smallest]) smallest = left;
      if (right < n && a[right] < a[smallest]) smallest = right;

      if (smallest === idx) break;
      [a[smallest], a[idx]] = [a[idx], a[smallest]];
      idx = smallest;
    }
  }

  // For debugging
  size() {
    return this.data.length;
  }
}

/**
 * Process tasks using k servers.
 *
 * @param {number} k - number of servers
 * @param {number[]} tasks - array of task durations in the order they arrive
 * @returns {{finishTime