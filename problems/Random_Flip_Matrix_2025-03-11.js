
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
        const col = randomIndex % this.n;

        return [row, col];
    }

    reset() {
        this.flippedCells.clear();
    }
}

// Example usage:
const matrix = new RandomFlipMatrix(3, 3);
console.log(matrix.flip()); // Randomly flips a cell and returns its coordinates
console.log(matrix.flip()); // Randomly flips another cell and returns its coordinates
matrix.reset(); // Resets the matrix, allowing all cells to be flipped again
