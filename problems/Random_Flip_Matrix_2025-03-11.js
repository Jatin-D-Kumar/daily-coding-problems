
class RandomFlipMatrix {
    constructor(m, n) {
        this.m = m;
        this.n = n;
        this.totalCells = m * n;
        this.flippedCells = new Set();
    }

    flip() {
        if (this.flippedCells.size === this.totalCells) {
            throw new Error("All cells are already flipped.");
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * this.totalCells);
        } while (this.flippedCells.has(randomIndex));

        this.flippedCells.add(randomIndex);

        const row = Math.floor(randomIndex / this.n);
        const col = randomIndex % t