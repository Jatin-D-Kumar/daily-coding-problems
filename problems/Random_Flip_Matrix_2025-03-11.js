
class RandomFlipMatrix {
    constructor(m, n) {
        this.m = m;
        this.n = n;
        this.totalCells = m * n;
        this.flippedCells = new Set();
    }

    flip() {
        if (this.flipp