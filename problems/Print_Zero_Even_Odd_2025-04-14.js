
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
                this.evenQueue.push(resolve);
                this.checkAndPrint();
            });
            printEven(i); // Print even number
        }
    }

    // Print odd
    async odd(printOdd) {
        for (let i = 1; i <= this.n; i += 2) {
            await new Promise(resolve => {
                this.oddQueue.push(resolve);
                this.checkAndPrint();
            });
            printOdd(i); // Print odd number
        }
    }

    // Check and print based on the current state
    checkAndPrint() {
        if (this.current === 0 && this.zeroQueue.length > 0) {
            this.zeroQueue.shift()(); // Resolve the zero promise
            this.current = 1; // Move to even
        } else if (this.current === 1 && this.evenQueue.length > 0) {
            this.evenQueue.shift()(); // Resolve the even promise
            this.current = 0; // Move back to zero
        } else if (this.current === 2 && this.oddQueue.length > 0) {
            this.oddQueue.shift()(); // Resolve the odd promise
            this.current = 0; // Move back to zero
        }
    }
}

// Example usage:
const n = 5; // Change this value to test with different n
const zeroEvenOdd = new ZeroEvenOdd(n);

zeroEvenOdd.zero(() => console.log(0));
zeroEvenOdd.even(num => console.log(num));
zeroEvenOdd.odd(num => console.log(num));
