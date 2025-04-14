
class ZeroEvenOdd {
    constructor(n) {
        this.n = n;
        this.zeroQueue = [];
        this.evenQueue = [];
        this.oddQueue = [];
        this.current = 0; // 0 for zero, 1 for even, 2 for odd
    }

    // Print zero
    async zero(printZero) {
        for (let i = 0; i < this.n; i++) {
            await new Promise(resolve => {
                this.zeroQueue.push(resolve);
                this.checkAndPrint();
            });
            printZero(); // Print "0"
        }
    }

    // Print even
    async even(printEven) {
        for (let i = 2; i <= this.n; i += 2) {
            await new Promise(resolve => {
                thi