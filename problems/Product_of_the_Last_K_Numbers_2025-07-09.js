
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

    getProduct(k) {
        if (k >= this.products.length) {
            return 0; // If k is greater than the number of products, return 0
        }
        // Return the product of the last k numbers
        return this.products[this.products.length - 1] / this.products[this.products.length - 1 - k];
    }
}

// Example usage:
const productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3); // Product: 3
productOfNumbers.add(2); // Product: 6
productOfNumbers.add(5); // Product: 30
console.log(productOfNumbers.getProduct(2)); // Output: 10 (2 * 5)
console.log(productOfNumbers.getProduct(3)); // Output: 30 (3 * 2 * 5)
productOfNumbers.add(0); // Reset
productOfNumbers.add(4); // Product: 4
console.log(productOfNumbers.getProduct(1)); // Output: 4
