
class ProductOfNumbers {
    constructor() {
        this.products = [1]; // Initialize with 1 to handle product calculations
    }

    add(num) {
        if (num === 0) {
            // If the number is 0, reset the products array
            this.products = [1];
        } else {
            // Multiply the last product with the new number
            this.products.push(this.products[this.products.length - 1] * num);
        }
    }

    getProdu